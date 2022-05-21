import axios from 'axios';
import React, { useEffect } from 'react'
import { useSelector} from "react-redux"
import { useParams} from "react-router-dom"
const ProductsDetails = () => {
  const { id } = useParams();
  const [{ mobilesData }] = useSelector((store) => store.home.data)
  mobilesData=mobilesData.filter((e)=>e.id=id)
  // useEffect(() => {
  //   axios.get(`http://localhost:4000/database/${id}`).then(({ data }) => {
  //     console.log(data);
  //   })
  // },[])
  return (
    <div>{mobilesData.map((e) => (
      <>{  e.title}</>
    ))}</div>
  )
}

export default ProductsDetails