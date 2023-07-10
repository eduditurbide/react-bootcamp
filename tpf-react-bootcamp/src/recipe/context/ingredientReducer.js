import { ingredientType } from "./ingredientActions"

export const ingredientReducer = (initialState = [], action) => {
  
  switch (action.type) {
    case ingredientType.add: {
      return [...initialState, action.payload]
    }
    case ingredientType.remove: {
      return initialState.filter((ingredient ,index) => index !== action.payload)
    }
    default:
      return initialState;
  }

}
