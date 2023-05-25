import { useContext, useEffect, useReducer, useState } from "react"
import { getRecipes } from "../helpers/getRecipes"
import { recipeReducer } from "../context/recipeReducer"
import { type } from "../context"
import { AuthContext } from "../../auth/context"


export const useRecipes = () => {
  
  const { user } = useContext(AuthContext)
  const [ recipes, dispatch ] = useReducer( recipeReducer, [] )
  const [ initRecipes, setInitRecipes ] = useState([])
  
  useEffect(() => {
    getInitialList()
  }, [])
  
  const getInitialList = async () => {
    const list = await getRecipes({ token: user.idToken })
    setInitRecipes(list.data)
    onSetRecipes(list.data)
  }
  
  const onSetRecipes = (recipes) => {
    dispatch({
      type: type.list,
      payload: recipes
    })
  }

  return {
    recipes,
  }
}
