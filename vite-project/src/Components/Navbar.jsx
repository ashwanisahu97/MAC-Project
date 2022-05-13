import React from 'react'
import { Link} from "react-router-dom"
const Navbar = () => {
    return (
      <div>
      <nav style={{
          display:'flex',
          justifyContent:'space-evenly'
      }}>
<Link to="/">Home</Link>
<Link to="/Category">Category</Link>
      </nav>
      </div>
  )
}

export default Navbar