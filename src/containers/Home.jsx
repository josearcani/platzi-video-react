import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'

import useInitialState from '../hooks/useInitialState'
import '../assets/styles/Home.scss'


const Home = ({ myList, trends, originals }) => {
  return (
    <>
      <Search />
      {myList.length > 0 &&
        <Categories title="Mi lista">
          <Carousel>
            {
              myList.map(item => {
                return <CarouselItem key={item.id} {...item} />
              })
            }
          </Carousel>
        </Categories>
      }
  
      <Categories title="Tendencias">
        <Carousel>
          {
            trends.map(item => {
              return <CarouselItem key={item.id} {...item} />
            })
          }
        </Carousel>
      </Categories>
  
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {
            originals.map(item => {
              return <CarouselItem key={item.id} {...item} />
            })
          }
        </Carousel>
      </Categories>
    </>
  )
}

const mapStateToProps = state => {
  return {
    // solo traer lo que necesito Este objeto es referido como stateProps
    // ya que pasa a ser props del componente
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
  }
}

export default connect(mapStateToProps, null)(Home)