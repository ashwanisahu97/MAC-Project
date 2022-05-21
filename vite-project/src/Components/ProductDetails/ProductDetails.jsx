import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams} from "react-router-dom"
const ProductsDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:4000/database/${id}`).then(({ data }) => {
      console.log(data);
    })
  },[])
  return (
    <div>ProductsDetails</div>
  )
}

export default ProductsDetails