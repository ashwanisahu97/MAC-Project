import React,{ useEffect } from "react"
import axios from "axios"
import { addData } from '../Redux/Category/Action'
import { useDispatch,useSelector} from "react-redux"
const Category = () => {
    const dispatch = useDispatch();
    const data = useSelector((store) => store.category.mobileData)
    console.log("data",data);
    useEffect(() => { 
        getData();
    }, [])
    const getData = () => { 
        axios.get("http://localhost:4000/mobileArr").then(({ data }) => { 
            dispatch(addData(data));
        })
    }
  return (
    <div>Category</div>
  )
}

export default Category