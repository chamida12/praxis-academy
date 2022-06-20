import React, { Component } from "react";
import axios from "axios";

class DeleteFake extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataApi:[]
        };
        this.handleRemove=this.handleRemove.bind(this);
    }

    handleRemove(e){
        console.log(e.target.value);
        fetch(`https://jsonplaceholder.typicode.com/posts/${e.target.value}`,{
            method:"DELETE"
        }).then(res => console.log(res));

    }
///cara mendelate

    componentDidMount () {
         axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
            this.setState({
                dataApi:res.data
            })
         });

    }

render (){
    return (
        <div>
            <p>
                Cara Get Api
            </p>
            {this.state.dataApi.map((dat,lucu)=>
            {
                return(
                <div key={lucu}>
                    <p> 
                        {dat.body}
                    </p>
                <button value={dat.id} onClick={this.handleRemove}> Hapus </button>
            
                </div>);
            })}
        </div>
    );
}
}

export default DeleteFake;