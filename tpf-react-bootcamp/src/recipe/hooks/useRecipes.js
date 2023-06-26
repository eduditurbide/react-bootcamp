import { useContext, useEffect, useState } from "react"
import { getRecipes } from "../helpers/getRecipes"
import { RecipeContext } from "../context/RecipeContext"
import { AuthContext } from "../../auth/context"
import { addRecipe, deleteRecipe, editRecipe } from "../helpers"


export const useRecipes = () => {

  const [state, setState] = useState({
    isLoading: false,
    hasError: false,
    errorMessage: null,
    successMessage: null,
    savedSuccessfully: false,
    deletedSuccessfully: false,
  })
  const { user, logout } = useContext(AuthContext)
  const {
    selected,
    recipeList,
    setRecipeList,
    setRecipeSelected,
  } = useContext(RecipeContext)

  /**
   * Recibe como parametro una función helper y controla su response
   * @param {function} callback 
   * @returns response: Object
   */
  const apiCall = async (callback, data) => {
    setState({ ...state, isLoading: true })
    const response = await callback(data)

    if (response?.data === 'Invalid token') {
      logout()  
      console.log(response?.data)
    }

    setState({
      ...state,
      isLoading: false,
    })

    return response
  }

  /**
   * Marca como seleccionado una receta según su ID
   * @param {string} recipeId 
   */
  const onSelectRecipe = (recipeId) => {
    setRecipeSelected(recipeId)
  }

  /**
   * Obtiene una lista de recetas, con posibilidad de un filtro por nombre de receta
   * @param {string} recipeToSearch 
   */
  const getRecipesList = async (recipeToSearch = null) => {
    const list = await apiCall(getRecipes, { token: user.idToken })

    if (recipeToSearch && list?.data?.length > 0) {
      setRecipeList(list.data.filter(recipe => recipe.name.toLowerCase().includes(recipeToSearch.toLowerCase())))
    } else {
      setRecipeList(list.data)
    }
  }

  /**
   * Recupera una receta según su ID
   * @param {string} recipeId 
   * @returns 
   */
  const getRecipeById = async (recipeId) => {
    if (!recipeId) return
    const list = await apiCall(getRecipes, { token: user.idToken })
    setRecipeList(list.data)
    setRecipeSelected(recipeId)

    return list?.data?.find(recipe => recipe._id === recipeId)
  }

  /**
   * Elimina una receta, recibe como parámetro el objeto a eliminar
   * @param {Object} recipe 
   * @returns 
   */
  const onDeleteRecipe = async (recipe) => {
    if (!recipe) return
    const deleted = await apiCall(deleteRecipe, { recipe, token: user.idToken })
    let withError = deleted?.hasError || false

    if (!withError) {
      setRecipeSelected(null)
    }

    setState({
      ...state,
      hasError: withError,
      errorMessage: withError ? "Hubo un error al eliminar la receta, o no tiene permisos, por favor intente nuevamente" : null,
      deletedSuccessfully: !withError,
    })
  }

  /**
   * Guarda una receta nueva o modificada
   * @param {Object} recipe 
   * @returns 
   */
  const onSaveRecipe = async (recipe) => {
    if (!recipe) return

    /** Save edited recipe */
    if (recipe._id) {
      const editedRecipe = await apiCall(editRecipe, { recipe, token: user.idToken })
      let withError = editedRecipe?.hasError || false

      if (!withError) {
        setRecipeSelected(null)
      }

      setState({
        ...state,
        hasError: withError,
        errorMessage: withError ? "No se pudo guardar los cambios, por favor intente nuevamente" : null,
        successMessage: !withError ? editedRecipe?.data?.msg : null,
      })
    }

    /** Save new recipe */
    if (!recipe._id) {
      const addedRecipe = await apiCall(addRecipe, { recipe, token: user.idToken })
      let withError = addedRecipe?.hasError || false

      let errors = ""
      if (withError && addedRecipe?.data?.errors) {
        addedRecipe.data.errors.forEach(error => {
          errors += error?.msg + '<br/>' || ''
        });
      }

      if (!withError) {
        setRecipeSelected(null)
      }

      setState({
        ...state,
        hasError: withError,
        errorMessage: withError ? errors : null,
        successMessage: !withError ? addedRecipe?.data?.msg : null,
        savedSuccessfully: !withError,
      })
    }
  }

  return {
    ...state,
    recipeList,
    isRecipeSelectedOwner: (user?.email && selected?.userEmail) && (user?.email === selected?.userEmail),
    selected: selected || null,
    getRecipesList,
    getRecipeById,
    onSelectRecipe,
    onSaveRecipe,
    onDeleteRecipe,
  }
}
