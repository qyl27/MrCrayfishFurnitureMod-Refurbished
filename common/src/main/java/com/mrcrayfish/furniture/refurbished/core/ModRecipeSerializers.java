package com.mrcrayfish.furniture.refurbished.core;

import com.mrcrayfish.framework.api.registry.RegistryContainer;
import com.mrcrayfish.framework.api.registry.RegistryEntry;
import com.mrcrayfish.furniture.refurbished.crafting.*;
import com.mrcrayfish.furniture.refurbished.platform.Services;
import com.mrcrayfish.furniture.refurbished.util.Utils;
import net.minecraft.world.item.crafting.RecipeSerializer;
import net.minecraft.world.item.crafting.SimpleCraftingRecipeSerializer;
import net.minecraft.world.item.crafting.SingleItemRecipe;

/**
 * Author: MrCrayfish
 */
@RegistryContainer
public class ModRecipeSerializers
{
    public static final RegistryEntry<WorkbenchContructingRecipe.Serializer> WORKBENCH_RECIPE = RegistryEntry.recipeSerializer(Utils.resource("workbench_constructing"), WorkbenchContructingRecipe.Serializer::new);
    public static final RegistryEntry<RecipeSerializer<GrillCookingRecipe>> GRILL_RECIPE = RegistryEntry.recipeSerializer(Utils.resource("grill_cooking"), () -> new ProcessingRecipe.Item.Serializer<>(GrillCookingRecipe::new, 200));
    public static final RegistryEntry<RecipeSerializer<FreezerSolidifyingRecipe>> FREEZER_RECIPE = RegistryEntry.recipeSerializer(Utils.resource("freezer_solidifying"), () -> new ProcessingRecipe.ItemWithCount.Serializer<>(FreezerSolidifyingRecipe::new, 200));
    public static final RegistryEntry<RecipeSerializer<ToasterHeatingRecipe>> TOASTER_RECIPE = RegistryEntry.recipeSerializer(Utils.resource("toaster_heating"), () -> new ProcessingRecipe.Item.Serializer<>(ToasterHeatingRecipe::new, 300));
    public static final RegistryEntry<SingleItemRecipe.Serializer<CuttingBoardSlicingRecipe>> CUTTING_BOARD_SLICING_RECIPE = RegistryEntry.recipeSerializer(Utils.resource("cutting_board_slicing"), () -> Services.RECIPE.createSingleItemSerializer(CuttingBoardSlicingRecipe::new));
    public static final RegistryEntry<CuttingBoardCombiningRecipe.Serializer> CUTTING_BOARD_COMBINING_RECIPE = RegistryEntry.recipeSerializer(Utils.resource("cutting_board_combining"), CuttingBoardCombiningRecipe.Serializer::new);
    public static final RegistryEntry<RecipeSerializer<MicrowaveHeatingRecipe>> MICROWAVE_RECIPE = RegistryEntry.recipeSerializer(Utils.resource("microwave_heating"), () -> new ProcessingRecipe.ItemWithCount.Serializer<>(MicrowaveHeatingRecipe::new, 200));
    public static final RegistryEntry<RecipeSerializer<FryingPanCookingRecipe>> FRYING_PAN_RECIPE = RegistryEntry.recipeSerializer(Utils.resource("frying_pan_cooking"), () -> new ProcessingRecipe.Item.Serializer<>(FryingPanCookingRecipe::new, 200));
    public static final RegistryEntry<RecipeSerializer<DoorMatCopyRecipe>> DOOR_MAT_COPY_RECIPE = RegistryEntry.recipeSerializer(Utils.resource("crafting_special_door_mat_copy"), () -> new SimpleCraftingRecipeSerializer<>(DoorMatCopyRecipe::new));
    public static final RegistryEntry<RecipeSerializer<OvenBakingRecipe>> OVEN_BAKING = RegistryEntry.recipeSerializer(Utils.resource("oven_baking"), () -> new ProcessingRecipe.ItemWithCount.Serializer<>(OvenBakingRecipe::new, 300));
}
