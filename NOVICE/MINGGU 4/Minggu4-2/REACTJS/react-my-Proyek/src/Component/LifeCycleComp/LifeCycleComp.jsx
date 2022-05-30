import React,{Component} from "react";
import './LifeCycleComp.css';

class LifeCycleComp extends Component{
    constructor(props){
    super(props);
    this.state ={
        count: 1
    }   
         console.log('constructor')
    }
    static getDriverStateFromProps(props,state){
        console.log ('getDriverStateFromProps')
        return null;
    
    }

    componentDidMount (){
        console.log('componentDidMount')
        setTimeout(() =>{
            this.setState({
                count :2 
            })
        }, 3000)
    }
    render(){
        return(
            <button className="btn"> Component Button{this.state.count} </button>
        )
    }
}
export default LifeCycleComp;


// import React, { Component } from "react"

// class Header extends Component {
//   state = {
//     title: "this is title"
//   }
//   render(){
//     return(
//       <div>
//         <h1>{this.state.title}</h1>
//       </div>
//     )
//   }
// }

// export default Header