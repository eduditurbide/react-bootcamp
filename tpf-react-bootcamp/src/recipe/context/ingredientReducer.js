import { type } from "./ingredientActions"

export const ingredientReducer = (initialState = [], action) => {
  
  switch (action.type) {
    case type.add: {
      return [...initialState, action.payload]
    }
    case type.remove: {
      return initialState.filter((ingredient ,index) => index !== action.payload)
    }
    default:
      return initialState;
  }

}
