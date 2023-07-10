import { useReducer } from "react"
import { ingredientReducer } from "../context"
import { ingredientType } from "../context/ingredientActions"

export const useIngredients = (ingredientList = [] ) => {

  const [ingredients, dispatch] = useReducer(ingredientReducer, ingredientList)

  const handleNewIngredient = (ingredient) => {
    dispatch({
      type: ingredientType.add,
      payload: ingredient
    })
  }

  const handleDeleteIngredient = (id) => {
    dispatch({
      type: ingredientType.remove,
      payload: id
    })
  }

  return {
    ingredients,
    handleNewIngredient,
    handleDeleteIngredient,
  }
}
