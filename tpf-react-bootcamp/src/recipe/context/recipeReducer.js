import { type } from "./recipeActions";

export const recipeReducer = ( initialState = [], action ) => {
  
  switch (action.type) {

    // List case
    case type.list: {
      return action.payload
    }

    default:
      return initialState;
  }

}
