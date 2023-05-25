import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'
import { type } from './authActions'

const init = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  return {
    logged: !!user,
    user: user
  }
}

export const AuthProvider = ({children}) => {

  const [authState, dispatch] = useReducer(authReducer, {}, init)
  
  const login = (data) => {
    if (data) {
      localStorage.setItem('user', JSON.stringify(data))
      dispatch({
        type: type.login,
        payload: data
      })
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({
      type: type.logout
    })
  }

  return (
    <AuthContext.Provider value={{
      ...authState,
      login,
      logout,
    }}>
      {children}
    </AuthContext.Provider>
  )
}
