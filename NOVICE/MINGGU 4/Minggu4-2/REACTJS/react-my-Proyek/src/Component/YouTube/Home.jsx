import React, { Component } from "react";
// import Product from "../../Container/Product";
import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
// import YouTubeCom from "./YouTube";

class Home extends Component{
    state = {
        showComponent: true
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({
                showComponent:false
            })
        },15000)

    }
    render(){
     return (
        <div>
            {/* <p> <h1> Pengen Makan  </h1> </p> */}
            {/* <YouTubeCom 
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
             desc="20rb x ditonton, 5 jam yang lalu"/>  
            <YouTubeCom 
             time="9.03" 
             title=" Tutorial Reactjs Part 4"
             desc="500rb x ditonton, 10 hari yang lalu"/>
            <YouTubeCom/>   */}
            {/* <p><h4> Cobain !!! </h4></p>
            <hr/>
            <Product/> */}

            <p> LifeCycle Component </p>
            <hr/>
            {
                this.state.showComponent
                ?
                <LifeCycleComp/> : null
           
            }
            
            
      

        </div>
     
     )
    }
}


export default Home;