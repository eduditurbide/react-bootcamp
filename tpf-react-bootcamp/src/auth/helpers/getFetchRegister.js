import { getEnvironments } from "../../helpers/getEnvironments";

export const getFetchRegister = async ({ email = "", password = "" }) => {
  const env = getEnvironments()
  // const signupUrl = import.meta.env.VITE_APP_RECIPE_URL_API + 'auth/signup'
  const signupUrl = env.VITE_APP_RECIPE_URL_API + 'auth/signup'

  const resp = await fetch(signupUrl, {
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

