import { getEnvironments } from "../../helpers/getEnvironments";

export const editRecipe = async ({ recipe, token }) => {
  const env = getEnvironments()
  // const recipesUrl = import.meta.env.VITE_APP_RECIPE_URL_API + `recipes/edit/${recipe?._id}?auth=${token}`
  const recipesUrl = env.VITE_APP_RECIPE_URL_API + `recipes/edit/${recipe?._id}?auth=${token}`

  const resp = await fetch(recipesUrl, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(recipe)
  })
    .catch(err => {
      console.log(err);
    })

  const dataResponse = await resp.json()

  return {
    data: dataResponse,
    hasError: !dataResponse || !!dataResponse?.error || !!dataResponse?.errors
  }
}
