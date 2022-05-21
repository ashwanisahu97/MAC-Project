import React, { useEffect,useState} from 'react'
import axios from "axios"
import "./Home.css";
import { getDataLoading,getDataSuccess,getDataFailure } from '../../Redux/Home/Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Home = () => {
  useEffect(() => {
    getData();
  }, [])
  const dispatch = useDispatch();
  // const mainData = useSelector((store) => store.home.data);
  // const [{basicDetails,generalData, laptopsData, mobilesData, televisionsData }] = mainData;
  
  const getData = () => {
    dispatch(getDataLoading())
    axios.get("http://localhost:4000/database").then(({ data }) => {
      console.log("myData", data);
      dispatch(getDataSuccess(data));
    }).catch((err) => dispatch(getDataFailure()))
  }
  // if (basicDetails === undefined)
  //   return <></>
  // else

    return (
      <></>
    )
}
//       <div className="bigContainer">
//         {
//           basicDetails.map((el) => {
//             return (
//               <div className="container">
//                 <div className="head-part">
//                   <div><h1>{el.title}</h1></div>
//                   <div><button>VIEW ALL</button></div>
//                 </div>

//                 <div className={el.class}>
//                   {
//                     arr.map((elm) => {
//                       return(
//                       elm.map((e) => {
//                         return (
//                           <div>
//                             <img src={e.img} alt="" width="150" height="150" />
//                             <h4>{e.feature}</h4>
//                             <p>{e.newPrice}</p>
//                             <div>
//                               <p>{e.oldPrice}</p>
//                               <p>{e.offer}</p>
//                             </div>
//                             <button>offer Available</button>
//                           </div>
//                         )
//                       })
//                       )
//                     })
//                   }
//                 </div>
//               </div>
//             )
//           })
//         }
//         )
//       </div>
  
//   )
// }

         

export default Home
