import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes,Route} from "react-router-dom"
import Category from "./Components/Category/Category"
import Home from './Components/Home/Home'
import ProductDetails from './Components/ProductDetails/ProductDetails'
import Navbar from "./Components/Navbar"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Category" element={<Category/>}></Route>
        <Route path="/ProductDetails/:id" element={<ProductDetails/>}></Route>
     </Routes>
    </div>
  )
}

export default App
