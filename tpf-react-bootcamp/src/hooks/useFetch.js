import { useEffect, useState } from "react"

export const useFetch = ({url, methodType = 'GET', jsonBody = null}) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null,
  })

  const getFetch = async () => {

    setState({...state, isLoading: true})

    const options = {
      method: methodType,
      headers: { 'Content-Type': 'application/json' },
    }

    if (jsonBody) {
      options = { ...options, data: jsonBody }
    }

    const resp = await fetch(url, options)
      .then(resp => resp.json())
      .then(data => {
        setState({
          ...state,
          data
        })    
      })
      .catch(err => {
        setState({
          ...state,
          data: err,
          hasError: true
        }) 
      })

    setState({
      ...state,
      isLoading: false,
    })
  }

  useEffect(() => {
    getFetch()
  }, [url, jsonBody])

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,
  }
}
