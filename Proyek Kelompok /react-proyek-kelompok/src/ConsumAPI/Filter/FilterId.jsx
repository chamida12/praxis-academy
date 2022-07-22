import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { getUser } from './ApiFilter';

const FilterId =() => {
    const [listUser,setListUser] = useState([]);
    const [message,setMessage]= useState("");

    useEffect(()=>{
        getUser(setListUser);
        setTimeout(()=>{
            setMessage("");
        },3000);
    },[message]);
  return (
    <div>
      <h2>Codingan Syafak</h2>
      {listUser.map((syafak)=>(
          <li>{syafak.id}-{syafak.nama}</li>
      ))}
      <h2> Filter Codingan Syafak</h2>
      {listUser.filter((syafak)=>  syafak.id === 1 ).map((syafak,index)=>(
          <li>
              {syafak.image}
             
          </li>

          
      ))}
   
    </div>
  )
}


export default FilterId;




// import React, { useEffect, useState } from 'react'
// import { getUser } from './ApiFilter';

// const FilterId =() => {
//     const [listUser,setListUser] = useState([]);
//     const [message,setMessage]= useState("");

//     useEffect(()=>{
//         getUser(setListUser);
//         setTimeout(()=>{
//             setMessage("");
//         },3000);
//     },[message]);
//   return (
//     <div>
//       <h2>Codingan Syafak</h2>
//       {listUser.map((syafak)=>(
//           <li>{syafak.id}-{syafak.nama}</li>
//       ))}
//     </div>
//   )
// }


// export default FilterId;