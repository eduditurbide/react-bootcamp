import { useReducer } from 'react'
import { type } from './recipeActions'
import { RecipeContext } from './RecipeContext'
import { recipeReducer } from './recipeReducer'

const init = () => {
  return {
    recipe: null,
    selected: null,
    recipeList: [],
  }
}

export const RecipeProvider = ({children}) => {

  const [recipeState, dispatch] = useReducer(recipeReducer, {}, init)

  const setRecipeList = (recipes) => {
    dispatch({
      type: type.list,
      payload: recipes
    })
  }

  const setRecipeSelected = (recipeId) => { 
    dispatch({
      type: type.selected,
      payload: recipeId
    })
  }

  return (
    <RecipeContext.Provider value={{
      ...recipeState,
      setRecipeList,
      setRecipeSelected,
    }}>
      {children}
    </RecipeContext.Provider>
  )
}
