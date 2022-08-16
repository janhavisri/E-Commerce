import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from './components/Header';
import Home from "./components/Home"
import Signup from './components/Signup';
import Login from './components/Login';
import AddProduct from './components/AddProduct'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route element={<Home></Home>} path ="/"></Route>
        <Route element={<Signup></Signup>} path ="signup"></Route>
        <Route element={<Login></Login>} path ="login"></Route>
        <Route element={<AddProduct></AddProduct>} path ="addproduct"></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App