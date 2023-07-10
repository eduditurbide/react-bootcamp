import { getEnvironments } from "../../helpers/getEnvironments";

export const getFetchLogin = async ({ email = "", password = "" }) => {
  const env = getEnvironments()
  // const loginUrl = import.meta.env.VITE_APP_RECIPE_URL_API + 'auth/login'
  const loginUrl = env.VITE_APP_RECIPE_URL_API + 'auth/login'

  const resp = await fetch(loginUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
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
