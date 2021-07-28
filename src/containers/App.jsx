import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:4001/initialState/';

const App = () => {
  // usamos el hook
  const initialState = useInitialState(API);
  return initialState.length === 0 ? <h1>Loading</h1> : (
    <div className='App'>
      <Header />
      <Search />
      {initialState.mylist?.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            {
              initialState.mylist?.map((item) => {
                // eslint-disable-next-line react/jsx-props-no-spreading
                return <CarouselItem key={item.id} {...item} />;
              })
            }
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencias'>
        <Carousel>
          {
            initialState.trends?.map((item) => {
              // eslint-disable-next-line react/jsx-props-no-spreading
              return <CarouselItem key={item.id} {...item} />;
            })
          }
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {
            initialState.originals?.map((item) => {
              // eslint-disable-next-line react/jsx-props-no-spreading
              return <CarouselItem key={item.id} {...item} />;
            })
          }
        </Carousel>
      </Categories>
      <Footer />
    </div>
  );
};

export default App;
