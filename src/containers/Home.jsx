import React, { useState, useEffect } from 'react'

import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'

import useInitialState from '../hooks/useInitialState'
import '../assets/styles/Home.scss'

const API = 'http://localhost:4001/initialState/'

const Home = () => {
  // usamos el hook
  const initialState = useInitialState(API)
  return initialState.length === 0 ? <h1>Loading</h1> : (
    <>
      <Search />
      {initialState.mylist?.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            {
              initialState.mylist?.map(item => {
                return <CarouselItem key={item.id} {...item} />
              })
            }
          </Carousel>
        </Categories>
      }
  
      <Categories title="Tendencias">
        <Carousel>
          {
            initialState.trends?.map(item => {
              return <CarouselItem key={item.id} {...item} />
            })
          }
        </Carousel>
      </Categories>
  
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {
            initialState.originals?.map(item => {
              return <CarouselItem key={item.id} {...item} />
            })
          }
        </Carousel>
      </Categories>
    </>
  )
}

export default Home