import { useReducer } from "react"
import { ingredientReducer } from "../context"
import { type } from "../context/ingredientActions"

export const useIngredients = (ingredientList = [] ) => {

  const [ingredients, dispatch] = useReducer(ingredientReducer, ingredientList)

  const handleNewIngredient = (ingredient) => {
    dispatch({
      type: type.add,
      payload: ingredient
    })
  }

  const handleDeleteIngredient = (id) => {
    dispatch({
      type: type.remove,
      payload: id
    })
  }

  return {
    ingredients,
    handleNewIngredient,
    handleDeleteIngredient,
  }
}
