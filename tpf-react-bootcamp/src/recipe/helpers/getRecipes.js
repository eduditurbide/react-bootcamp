
export const getRecipes = async ({ token }) => {

  const resp = await fetch(
    `https://backend-recipes-bootcamps-tribe-production.up.railway.app/api/recipes/get?auth=${token}`,
    {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }
  )

  const dataResponse = await resp.json()

  return {
    data: dataResponse,
    hasError: resp.status === 400
  }
}
