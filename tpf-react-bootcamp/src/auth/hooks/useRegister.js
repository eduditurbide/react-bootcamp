import { useContext, useState } from "react"
import { AuthContext } from "../context"
import { getFetchRegister } from "../helpers/getFetchRegister"

export const useRegister = ( initialRegister = {} ) => {

  const [state, setState] = useState( initialRegister )
  const { login } = useContext(AuthContext)

  const sendCredentials = async({email, password}) => {
    setState({ 
      ...state,
      isLoading: true,
      hasError: false,
      errorMessages: null,
    })
    
    const {data, hasError} = await getFetchRegister({ email, password })
    
    setState({
      ...state,
      isLoading: false,
    })

    if (hasError) {
      if (data?.error) {
        setErrorMessages("Usuario o contraseña inválidos.")
        return
      }
      
      if (data?.errors && data.errors.length > 0) {
        const listMsg = data.errors.map(error => error.msg)
        setErrorMessages(listMsg.join("<br/>"))
        return
      }
      // Other error
      setErrorMessages("Error en servicio.")
      return
    }

    login(data || null)

    setState({
      ...state,
      data: data,
      hasError: false,
      errorMessages: null,
    })
  }

  const setErrorMessages = (msg = null) => {  
    if (!msg) return

    setState({
      ...state,
      errorMessages: msg,
      hasError: !!msg
    })
  }

  return {
    ...state,
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
    errorMessages: state.errorMessages,
    sendCredentials,
  }
}
