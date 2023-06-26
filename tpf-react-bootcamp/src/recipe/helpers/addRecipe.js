
export const addRecipe = async ({ recipe, token }) => {
  const recipesUrl = import.meta.env.VITE_APP_RECIPE_URL_API + `recipes/add?auth=${token}`

  const resp = await fetch(recipesUrl, {
    method: 'POST',
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
