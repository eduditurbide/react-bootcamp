
export const getFetchLogin = async ({ email = "", password = ""}) => {

    const resp = await fetch(
      'https://backend-recipes-bootcamps-tribe-production.up.railway.app/api/auth/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({email, password})
      }
    )
    
    const dataResponse = await resp.json()

    return {
      data: dataResponse, 
      hasError: resp.status === 400
    }
  }
