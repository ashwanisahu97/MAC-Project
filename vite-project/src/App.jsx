import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Routes,Route} from "react-router-dom"
import Category from "./Components/Category"
import Home from './Components/Home'
import Navbar from "./Components/Navbar"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
     <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/Category" element={<Category/>}></Route>
     </Routes>
    </div>
  )
}

export default App
