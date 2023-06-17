import { useContext, useEffect } from "react"
import { getRecipes } from "../helpers/getRecipes"
import { RecipeContext } from "../context/RecipeContext"
import { AuthContext } from "../../auth/context"


export const useRecipes = () => {
  
  const { user } = useContext(AuthContext)
  const {
    selected, 
    recipeList, 
    setRecipeList,
    setRecipeSelected
  } = useContext(RecipeContext)
    
  const getRecipesList = async () => {
    const list = await getRecipes({ token: user.idToken })
    setRecipeList(list.data)
  }  

  const onSelectRecipe = (recipeId) => { 
    setRecipeSelected(recipeId)
  }

  const getRecipeById = async (recipeId) => {
    const list = await getRecipes({ token: user.idToken })
    setRecipeList(list.data)
    setRecipeSelected(recipeId)
    return list?.data?.find( recipe => recipe._id === recipeId)
  }  

  return {
    recipeList,
    selected: selected || null,
    getRecipesList,
    getRecipeById,
    onSelectRecipe,
  }
}
