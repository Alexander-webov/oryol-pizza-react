
import React, { useEffect } from 'react';
import Header from './components/Header';

import { Routes, Route } from "react-router-dom";
import { useDispatch } from 'react-redux';
import './scss/app.scss'
import Home from './pages/Home';
import Cart from './pages/Cart';
import axios from 'axios';

import { setPizzas } from './redux/actions/pizzas'



function App() {

  const dispatch = useDispatch()


  useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(({ data }) => {
        dispatch(setPizzas(data))
      })
  }, []);





  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />

        </Routes>


      </div>
    </div>
  );
}


export default App;
