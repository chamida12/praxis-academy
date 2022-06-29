import React,{ useState}from "react";


export const Home = () => {
    const [counter,setCounter] = useState(0);
    console.log (counter);


    return (
         
         <>
         <div style={{display:"flex",heigth:"100vh", alignItem:"center", justifyContent:"center"}}>
             <div>
                 <p> Home Page </p>
                 <p> Count : {counter}</p>
                     <button onClick={()=> setCounter(counter + 1)}>
                     Add Counter
                     </button>
                 
             </div>
             

         </div>
         </>
    );
};