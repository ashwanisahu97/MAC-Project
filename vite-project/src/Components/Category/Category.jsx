import React,{ useEffect } from "react"
import axios from "axios"
import "./Category.css"
import { addData } from '../../Redux/Category/Action'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom"
const Category = () => {
    const dispatch = useDispatch();
    const { mobilesData } = useSelector((store) => store.category)
    // const navigate = useNavigate();
    useEffect(() => { 
        getData();
    }, [])
    const getData = () => { 
        axios.get("http://localhost:4000/database/").then(({ data }) => { 
            dispatch(addData(data));
            console.log("data", data);
        })
    }
    console.log("mobilesData",mobilesData)
  return (
    <div>
       <div className="headerDiv">

</div>

<div className="main">

   
<div className="left-div">

    
    <div>
        <h2>FILTERS</h2>
    </div>

    
    <div>
        <h3>TYPE</h3>
        <div>
            <input type = "checkbox" className="iPhones" value="iPhones"/>
       <label>iPhones</label><br/>
            <input type="checkbox" className="smartPhones" value="smartPhones"/>
            <label>smartphones</label><br/>
            <input type="checkbox" className="basicPhones" value="basicPhones"/>
            <label>basic phones</label><br/>
        </div>
    </div>

    <div className="price-range">
        <h3>PRICE RANGE</h3>
        <div>
            <div>
                <p>Rs.699</p>
            </div>
            <div>
                <p>Rs.212900</p>
            </div>
        </div>
        
        <hr/>
    </div>

 
    <div>
        <h3>BRAND</h3>
        <div>
            <input type = "checkbox" className="apple" value="apple"/>
           <label>Apple</label><br/>
            <input type="checkbox" className="onePlus" value="onePlus"/>
           <label>One Plus</label><br/>
            <input type="checkbox" className="basicPhones" value="basicPhones"/>
            <label>basic phones</label><br/>
        </div>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</div>


<div className="right-div">

<div className="upper-container">
    <div className="upper-head-div">
        <div className="mobile-div">
            <h1>Buy Mobiles & Tablets Online</h1>
        </div>
        <div className="result-div">
            <h3>We have got 1183 Results</h3>
        </div>
    </div>
    <div className="sort-div">
        <div className="sort-by"><p>sort by</p></div>
        <div className="sort-menu">
                              <select name="" className="filter">
                <option value=""></option>
                <option value="new">New</option>
                <option value="popular">Popular</option>
                <option value="relevance">Relevance</option>
                <option value="low">Price:Low to High</option>
                <option value="high">Price:High To Low</option>
            </select>
        </div>
    </div>

</div>
                  <div className="container">
                      {
                          mobilesData.map((e) => { 
                              return (
                                <div>
                                      <img src={e.img} alt="" width="150" height="150"/>
                                       <h4>{e.feature}</h4>
                                       <p>{e.newPrice}</p>
                                      <div>
                                    <p>{e.oldPrice}</p>
                            <p>{e.offer}</p>
                                                       </div>
                                  <button>offer Available</button>
                                            </div>
                           )   
                          })
                      }
</div>

</div>
    </div>
    </div>
  )
}

export default Category