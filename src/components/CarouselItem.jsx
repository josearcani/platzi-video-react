import React from 'react'
import PropTypes from 'prop-types'

// concectar la app con connect
import { connect } from 'react-redux'
import { setFavorite } from '../actions'

import playIcon from '../assets/static/play-icon.png'
import plusIcon from '../assets/static/plus-icon.png'

import '../assets/styles/components/CarouselItem.scss'

const CarouselItem = (props) => {
  const { title, cover, year, contentRating, duration, id } = props

  // funcion para manejar el guardado a los favoritos
  const handleSetFavorite = () => {
    props.setFavorite({
      // mandamos los elementos que necesita para poderse mostrar se pasa a payload en /actions/index.js
      // luego es mandado hacia reducer por store
      title, cover, year, contentRating, duration, id
    })
  }
  return (
    <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />
      <div className="carousel-item__details">
        <div>             
          <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" />
          <img
            className="carousel-item__details--img"
            src={plusIcon}
            alt="Plus Icon" 
            onClick={handleSetFavorite}
          />
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  )
}
CarouselItem.propTypes = {
  title: PropTypes.string,
  cover: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

// encapsula
const mapDispatchToProps = {
  // viene del action importado
  //me regresa un objeto cuyos parametros son funciones que despachan acciones al store
  setFavorite,
}

// connect recibe mapStateToProps => pero no vamos a mapear estos estos estados mandamos null
// mapDispatchToProps => 
export default connect(null, mapDispatchToProps)(CarouselItem)