import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import '../assets/styles/App.scss'

const App = () => {
  const [ video, setVideo ] = useState([])

  useEffect(() => {
    fetch('http://localhost:4001/initialState/')
      .then(response => response.json())
      .then(data => setVideo(data))
      .catch(error => console.error(error))
  }, [])

  console.log(video)

  return (
    <div className="App">
      <Header />
      <Search />
      {video.mylist?.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      }
  
      <Categories title="Tendencias">
        <Carousel>
          {
            video.trends?.map(item => {
              return <CarouselItem key={item.id} {...item} />
            })
          }
        </Carousel>
      </Categories>
  
      <Categories title="Originales de Platzi Video">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>
      <Footer />
    </div>
  )
}

export default App  