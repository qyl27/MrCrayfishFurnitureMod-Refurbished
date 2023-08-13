package com.mrcrayfish.furniture.refurbished.blockentity;

import com.mrcrayfish.furniture.refurbished.block.StoveBlock;
import com.mrcrayfish.furniture.refurbished.core.ModBlockEntities;
import com.mrcrayfish.furniture.refurbished.inventory.BuildableContainerData;
import com.mrcrayfish.furniture.refurbished.inventory.StoveMenu;
import com.mrcrayfish.furniture.refurbished.platform.Services;
import com.mrcrayfish.furniture.refurbished.util.BlockEntityHelper;
import com.mrcrayfish.furniture.refurbished.util.Utils;
import net.minecraft.core.BlockPos;
import net.minecraft.nbt.CompoundTag;
import net.minecraft.nbt.Tag;
import net.minecraft.network.chat.Component;
import net.minecraft.network.protocol.game.ClientboundBlockEntityDataPacket;
import net.minecraft.server.level.ServerLevel;
import net.minecraft.world.entity.player.Inventory;
import net.minecraft.world.inventory.AbstractContainerMenu;
import net.minecraft.world.inventory.ContainerData;
import net.minecraft.world.item.ItemStack;
import net.minecraft.world.level.Level;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.entity.BlockEntity;
import net.minecraft.world.level.block.entity.BlockEntityType;
import net.minecraft.world.level.block.state.BlockState;

import javax.annotation.Nullable;
import java.lang.ref.WeakReference;

/**
 * Author: MrCrayfish
 */
public class StoveBlockEntity extends BasicLootBlockEntity implements IProcessingBlock, IHeatingSource
{
    public static final int DATA_ENERGY = 0;
    public static final int DATA_TOTAL_ENERGY = 1;

    protected boolean processing;
    protected int totalProcessingTime;
    protected int processingTime;
    protected int totalEnergy;
    protected int energy;
    protected WeakReference<ICookingBlock> cookingBlockRef;
    protected boolean sync;

    protected final ContainerData data = new BuildableContainerData(builder -> {
        builder.add(DATA_ENERGY, () -> energy, value -> energy = value);
        builder.add(DATA_TOTAL_ENERGY, () -> totalEnergy, value -> totalEnergy = value);
    });

    public StoveBlockEntity(BlockPos pos, BlockState state)
    {
        this(ModBlockEntities.STOVE.get(), pos, state);
    }

    public StoveBlockEntity(BlockEntityType<?> type, BlockPos pos, BlockState state)
    {
        super(type, pos, state, 1);
    }

    @Override
    public EnergyMode getEnergyMode()
    {
        return EnergyMode.ALWAYS_CONSUME;
    }

    @Override
    public int getEnergy()
    {
        return this.energy;
    }

    @Override
    public void addEnergy(int energy)
    {
        this.energy += energy;
    }

    @Override
    public boolean requiresEnergy()
    {
        return true;
    }

    @Override
    public int retrieveEnergy(boolean consume)
    {
        ItemStack stack = this.getItem(0);
        if(!stack.isEmpty())
        {
            int energy = Services.ITEM.getBurnTime(stack, null);
            if(energy > 0)
            {
                if(consume)
                {
                    stack.shrink(1);
                    this.totalEnergy = energy;
                }
                return energy;
            }
        }
        return 0;
    }

    @Override
    public int updateAndGetTotalProcessingTime()
    {
        int time = 0;
        ICookingBlock block = this.getCookingBlock();
        if(block != null)
        {
            time = block.getTimeToCook();
        }
        if(this.totalProcessingTime != time)
        {
            this.totalProcessingTime = time;
        }
        return this.totalProcessingTime;
    }

    @Override
    public int getTotalProcessingTime()
    {
        return this.totalProcessingTime;
    }

    @Override
    public int getProcessingTime()
    {
        return this.processingTime;
    }

    @Override
    public void setProcessingTime(int time)
    {
        if(this.processingTime == 0 && time > this.processingTime)
        {
            ICookingBlock block = this.getCookingBlock();
            if(block != null)
            {
                block.onStartCooking();
                this.processing = true;
                this.sync();
            }
        }
        else if(time == 0 && time < this.processingTime)
        {
            ICookingBlock block = this.getCookingBlock();
            if(block != null)
            {
                block.onStopCooking();
                this.processing = false;
                this.sync();
            }
        }
        this.processingTime = time;
    }

    @Override
    public void onCompleteProcess()
    {
        ICookingBlock block = this.getCookingBlock();
        if(block != null)
        {
            block.onCompleteCooking();
            this.processing = false;
            this.sync();
        }
    }

    @Override
    public boolean canProcess()
    {
        ICookingBlock block = this.getCookingBlock();
        return block != null && block.canCook();
    }

    @Nullable
    private ICookingBlock getCookingBlock()
    {
        if(this.cookingBlockRef != null)
        {
            ICookingBlock block = this.cookingBlockRef.get();
            if(block != null && !block.getBlockEntity().isRemoved())
            {
                return block;
            }
            this.cookingBlockRef = null;
        }

        if(this.level instanceof ServerLevel serverLevel)
        {
            BlockEntity entity = serverLevel.getBlockEntity(this.worldPosition.above());
            if(entity instanceof ICookingBlock cookingBlock)
            {
                this.cookingBlockRef = new WeakReference<>(cookingBlock);
                return cookingBlock;
            }
        }
        return null;
    }

    public static void serverTick(Level level, BlockPos pos, BlockState state, StoveBlockEntity stove)
    {
        stove.processTick();
        if(stove.sync)
        {
            BlockEntityHelper.sendCustomUpdate(stove, stove.getUpdateTag());
            stove.sync = false;
        }
    }

    @Override
    protected Component getDefaultName()
    {
        return Utils.translation("container", "stove");
    }

    @Override
    protected AbstractContainerMenu createMenu(int windowId, Inventory playerInventory)
    {
        return new StoveMenu(windowId, playerInventory, this, this.data);
    }

    @Override
    public boolean isMatchingContainerMenu(AbstractContainerMenu menu)
    {
        return menu instanceof StoveMenu stove && stove.getContainer() == this;
    }

    @Override
    public void onOpen(Level level, BlockPos pos, BlockState state)
    {
        // TODO sounds
        this.setDoorState(state, true);
    }

    @Override
    public void onClose(Level level, BlockPos pos, BlockState state)
    {
        this.setDoorState(state, false);
    }

    private void setDoorState(BlockState state, boolean open)
    {
        Level level = this.getLevel();
        if(level != null)
        {
            level.setBlock(this.getBlockPos(), state.setValue(StoveBlock.OPEN, open), Block.UPDATE_ALL);
        }
    }

    @Override
    public boolean isHeatingAboveBlock()
    {
        return this.processing;
    }

    /**
     * Callback when the stove is removed from the level and updates the above cooking block, if
     * any, that cooking has stopped.
     *
     * @param pos the block position of the stove
     */
    public void onDestroyed(BlockPos pos)
    {
        if(this.isHeatingAboveBlock())
        {
            Level level = this.getLevel();
            if(level != null && level.getBlockEntity(pos.above()) instanceof ICookingBlock cooking)
            {
                cooking.onStopCooking();
            }
        }
    }

    /**
     * Marks the frying pan as needing to sync data to tracking clients
     */
    protected void sync()
    {
        this.sync = true;
    }

    @Nullable
    @Override
    public ClientboundBlockEntityDataPacket getUpdatePacket()
    {
        return ClientboundBlockEntityDataPacket.create(this);
    }

    @Override
    public CompoundTag getUpdateTag()
    {
        return this.saveWithoutMetadata();
    }

    @Override
    public void load(CompoundTag tag)
    {
        super.load(tag);
        if(tag.contains("Processing", Tag.TAG_BYTE))
        {
            this.processing = tag.getBoolean("Processing");
        }
        if(tag.contains("TotalProcessingTime", Tag.TAG_INT))
        {
            this.totalProcessingTime = tag.getInt("TotalProcessingTime");
        }
        if(tag.contains("ProcessingTime", Tag.TAG_INT))
        {
            this.processingTime = tag.getInt("ProcessingTime");
        }
        if(tag.contains("TotalEnergy", Tag.TAG_INT))
        {
            this.totalEnergy = tag.getInt("TotalEnergy");
        }
        if(tag.contains("Energy", Tag.TAG_INT))
        {
            this.energy = tag.getInt("Energy");
        }
    }

    @Override
    protected void saveAdditional(CompoundTag tag)
    {
        super.saveAdditional(tag);
        tag.putBoolean("Processing", this.processing);
        tag.putInt("TotalProcessingTime", this.totalProcessingTime);
        tag.putInt("ProcessingTime", this.processingTime);
        tag.putInt("TotalEnergy", this.totalEnergy);
        tag.putInt("Energy", this.energy);
    }
}
