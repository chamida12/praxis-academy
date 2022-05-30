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
        // setTimeout(() =>{
        //     this.setState({
        //         count :2 
        //     })
        // }, 3000)
    }
    shouldComponentUpdate(nextProps,nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps : ', nextProps);
        console.log ('nextState',nextState)
        console.log ('this state',this.state)
        console.groupEnd();
        if(nextState.count >= 21){
            return false
        }
        return true;
    }
    changeCount =()=>{
        this.setState({
            count:this.state.count +1
        })
    }


    render(){
        return(
            <button className="btn" onClick={ this.changeCount}> Component Button{this.state.count} </button>
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