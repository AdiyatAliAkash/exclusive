import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import Layouts from './components/Layouts'
import ProductDetails from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import CheckOut from './pages/CheckOut'
import Contact from './pages/Contact'
import Login from './pages/Login'
import SignUp from './pages/SignUp'


const App = () => {

  let multiPage = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layouts />}>
        <Route index element={<Home />}></Route>
        <Route path='/:id' element={<ProductDetails />}></Route>
        <Route path='/product' element={<ProductPage />}></Route>
        <Route path='/product/:id' element={<ProductDetails />}></Route>
        <Route path='/cart' element={<CartPage />}></Route>
        <Route path='/check-out' element={<CheckOut />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/signup' element={<SignUp />}></Route>
        <Route path='/login' element={<Login />}></Route>
      </Route>
    )
  )

  return (
    <RouterProvider router={multiPage}></RouterProvider>
  )
}

export default App