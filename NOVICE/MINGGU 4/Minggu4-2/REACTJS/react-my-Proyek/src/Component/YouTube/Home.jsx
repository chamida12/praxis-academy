import React, { Component } from "react";
import YouTubeCom from "./YouTube";

class Home extends Component{
    render(){
     return (
        <div>
            <p> <h1> Youtube Ngaji Coding </h1> </p>
            <YouTubeCom 
             time="3.19" 
             title=" Tutorial Reactjs Part 1"
             desc="100rb x ditonton, 3 hari yang lalu"/>
            <YouTubeCom 
             time="4.10"
             title=" Tutorial Reactjs Part 2"
             desc="10rb x ditonton, 1 hari yang lalu"/>
            <YouTubeCom 
             time="7.30" 
             title=" Tutorial Reactjs Part 3"
             desc="20rb x ditonton, 8 jam yang lalu"/>  
            <YouTubeCom 
             time="9.03" 
             title=" Tutorial Reactjs Part 4"
             desc="500rb x ditonton, 10 hari yang lalu"/>
            <YouTubeCom/>  
           
            
      

        </div>
     
     )
    }
}


export default Home;