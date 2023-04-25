import { Character, LoadingFetch } from "../03-examples"
import { useCounter, useFetch } from "../hooks"

export const Layout = () => {

  const {counter, increment} = useCounter(1)
  const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`)
  const {name, image} = !!data && data

  return (
    <>
      <h1>Rick & Morty Characters</h1>
      <hr/>

      {isLoading ? <LoadingFetch /> : <Character name={name} image={image}/>}

      <button 
        className="btn btn-primary" 
        onClick={(e) => increment(1)}
        disabled={isLoading}
      >
        Next image
      </button>

    </>
  )
}
