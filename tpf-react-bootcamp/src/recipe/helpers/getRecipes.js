import { getEnvironments } from "../../helpers/getEnvironments";

export const getRecipes = async ({ token }) => {
  const env = getEnvironments()
  // const recipesUrl = import.meta.env.VITE_APP_RECIPE_URL_API + `recipes/get?auth=${token}`
  const recipesUrl = env.VITE_APP_RECIPE_URL_API + `recipes/get?auth=${token}`
  
  const resp = await fetch(recipesUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
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
