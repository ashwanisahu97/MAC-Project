import React, { useEffect,useState} from 'react'
import axios from "axios"
import "./Home.css";
import { addHomeData } from '../../Redux/Home/Action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
const Home = () => {
  const [arr,setArr]=useState([])
  const dispatch = useDispatch();
  const mainData = useSelector((store) => store.home.mainData);
  const { basicDetails, generalData, laptopsData, mobilesData, televisionsData } = mainData;
  useEffect(() => {
    getData();
  }, [])
  const getData = () => {
    axios.get("http://localhost:4000/database").then(({ data }) => {
      // console.log("myData", data);
      dispatch(addHomeData(data));
      // dispatch(addBaseData(data.basicDetails));
    })
  }
  // console.log("General Data", basicDetails);
  // console.log("basic Data", baseData);

  // genData = generalData.slice(0, 6)
  // lapData = laptopsData.slice(0,6)
  // mobData=mobilesData.slice(0,6)
  // telData=televisionsData.slice(0,6)
 
  let arr1 = [generalData, laptopsData, mobilesData, televisionsData]
  console.log("arr", arr);
  return (
    <div>
    </div>
  )
}
//     <div>
//       <div className="bigContainer">
//         {
//           basicDetails.map((el) => {
//             return (
//               <div className="container">
//                 <div className="head-part">
//                   <div><h1>{el.title}</h1></div>
//                   <div><button>VIEW ALL</button></div>
//                 </div>

//                 <div className={e.class}>
//                   {/* {
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
//                   } */}
//                 </div>
//               </div>
//             )
//           })
//         }
//         )
//       </div>
//     </div>
//   )
// }
         
//             {/* {
//               genData.map((e) => {
//                 return (
//                   <div>
//                     <img src={e.img} alt="" width="150" height="150" />
//                     <h4>{e.feature}</h4>
//                     <p>{e.newPrice}</p>
//                     <div>
//                       <p>{e.oldPrice}</p>
//                       <p>{e.offer}</p>
//                     </div>
//                     <button>offer Available</button>
//                   </div>
//                 )
//               })
//             } */}
// // </div>
// // </div>
//             )
// })}
// }
// </div>
// </div >
//   )


// <div className="container">
// <div className="head-part">
//     <div><h1>LAPTOPS</h1></div>
//     <div><button>VIEW ALL</button></div>
// </div>

// <div className="laptop"></div>
// </div>

// <div className="container">
// <div className="head-part">
//     <div><h1>SMART PHONES</h1></div>
//     <div><button>VIEW ALL</button></div>
// </div>

// <div className="mobile"></div>
// </div>

// <div className="container">
//     <div className="head-part">
//         <div><h1>TELEVISIONS</h1></div>
//         <div><button>VIEW ALL</button></div>
//     </div>

//     <div className="television"></div>
// </div>

// <div className="container5">
// <div className="head-part">
// <div><h1>BEST DEALS</h1></div>
// <div><button>VIEW ALL</button></div>
// </div>

// <div className=""></div>
// </div> 

// </div>
//     </div>
//   )
// }

export default Home
