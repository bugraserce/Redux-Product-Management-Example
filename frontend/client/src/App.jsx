import { useEffect, useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import BasketProduct from './components/BasketProduct'
import { useDispatch, useSelector } from 'react-redux'
import { updateTotal } from './features/basketSlice'

function App() {

  const {products} = useSelector((store) => store.basket);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updateTotal())
  
  },[products,dispatch])


  return (
    <>
   
     <h1 className="text-3xl font-bold underline text-center">
      Redux-Store-Example
    </h1>

    <Navbar></Navbar>
    <BasketProduct></BasketProduct>
    </>
  )
}

export default App
