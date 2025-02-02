package com.mrcrayfish.furniture.refurbished.compat.crafttweaker.managers;

import com.blamejared.crafttweaker.api.CraftTweakerAPI;
import com.blamejared.crafttweaker.api.CraftTweakerConstants;
import com.blamejared.crafttweaker.api.action.recipe.ActionAddRecipe;
import com.blamejared.crafttweaker.api.annotation.ZenRegister;
import com.blamejared.crafttweaker.api.ingredient.IIngredient;
import com.blamejared.crafttweaker.api.item.IItemStack;
import com.blamejared.crafttweaker.api.recipe.manager.base.IRecipeManager;
import com.blamejared.crafttweaker_annotations.annotations.Document;
import com.mrcrayfish.furniture.refurbished.core.ModRecipeTypes;
import com.mrcrayfish.furniture.refurbished.crafting.GrillCookingRecipe;
import com.mrcrayfish.furniture.refurbished.crafting.ProcessingRecipe;
import net.minecraft.world.item.crafting.RecipeHolder;
import net.minecraft.world.item.crafting.RecipeType;
import org.openzen.zencode.java.ZenCodeType;

/**
 * Author: MrCrayfish
 */
@ZenRegister
@Document("mods/RefurbishedFurniture/Grill/Cooking")
@ZenCodeType.Name("mods.refurbished_furniture.GrillCooking")
public class GrillCookingRecipeManager implements IRecipeManager<GrillCookingRecipe>
{
    @ZenCodeType.Method
    public void addRecipe(String name, String category, IIngredient ingredient, IItemStack result, @ZenCodeType.OptionalInt(200) int time)
    {
        CraftTweakerAPI.apply(new ActionAddRecipe<>(this, new RecipeHolder<>(CraftTweakerConstants.rl(name), new GrillCookingRecipe(ProcessingRecipe.Category.byName(category), ingredient.asVanillaIngredient(), result.getInternal(), time))));
    }

    @Override
    public RecipeType<GrillCookingRecipe> getRecipeType()
    {
        return ModRecipeTypes.GRILL_COOKING.get();
    }
}




