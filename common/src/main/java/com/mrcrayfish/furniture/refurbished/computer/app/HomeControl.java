package com.mrcrayfish.furniture.refurbished.computer.app;

import com.mrcrayfish.furniture.refurbished.Config;
import com.mrcrayfish.furniture.refurbished.blockentity.ComputerBlockEntity;
import com.mrcrayfish.furniture.refurbished.blockentity.IComputer;
import com.mrcrayfish.furniture.refurbished.blockentity.IHomeControlDevice;
import com.mrcrayfish.furniture.refurbished.computer.Program;
import com.mrcrayfish.furniture.refurbished.electricity.IElectricityNode;
import net.minecraft.core.BlockPos;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.entity.player.Player;

import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Author: MrCrayfish
 */
public class HomeControl extends Program
{
    public HomeControl(ResourceLocation id, IComputer computer)
    {
        super(id, computer);
    }

    public List<IHomeControlDevice> findDevices()
    {
        Player player = this.computer.getUser();
        if(player != null && player.level().getBlockEntity(this.computer.getComputerPos()) instanceof ComputerBlockEntity computerBlockEntity)
        {
            int maxSize = Config.SERVER.electricity.maximumNodesInNetwork.get();
            return IElectricityNode.searchNodes(computerBlockEntity, maxSize, true, node -> true, node -> node instanceof IHomeControlDevice)
                    .stream().map(node -> (IHomeControlDevice) node).sorted(Comparator.comparing(device -> device.getDeviceName().getString())).collect(Collectors.toList());
        }
        return Collections.emptyList();
    }

    public void toggleDevice(BlockPos pos)
    {
        if(this.findDevices().stream().anyMatch(device -> device.getDevicePos().equals(pos)))
        {
            Player player = this.computer.getUser();
            if(player != null && player.level().getBlockEntity(pos) instanceof IHomeControlDevice device)
            {
                device.toggleDeviceState();
            }
        }
    }

    public void updateDevices(boolean state)
    {
        this.findDevices().forEach(device -> device.setDeviceState(state));
    }
}
