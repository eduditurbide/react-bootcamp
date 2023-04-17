import { useFetchGifs } from "../hooks/useFetchGifs"
import PropTypes from 'prop-types'
import { GifItem } from "./GifItem"

export const GifGrid = ({ category }) => {

  const { images, isLoading } = useFetchGifs( category )
  
  return (
    <>
      <h3>{category}</h3>
      {isLoading && (
        <h2>Cargando...</h2>
      )}
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img}/>
        ))}
      </div>
    </>
  )
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
}
