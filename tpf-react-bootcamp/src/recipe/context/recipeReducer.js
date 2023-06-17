import { type } from "./recipeActions";

export const recipeReducer = ( state = {}, action ) => {
  
  switch (action.type) {

    // List case
    case type.list: {
      return {
        ...state,
        recipeList: action.payload
      }
    }

    case type.selected: {
      return {
        ...state,
        selected: action.payload ? state?.recipeList?.find(recipe => recipe._id === action.payload) : null
      }
    }

    default:
      return initialState;
  }

}
