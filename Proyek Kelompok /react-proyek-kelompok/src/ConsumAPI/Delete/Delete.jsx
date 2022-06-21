import React, { Component } from "react";
import axios from "axios";

class Delete extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataApi:[]
        };
        this.handleRemove=this.handleRemove.bind(this);
    }


    reloadData(){
        axios.get('https://549e-36-73-71-108.ap.ngrok.io/list').then(res => {
            console.log("GET API: ", res.data.data);
            this.setState({
                dataApi:res.data.data
            })
         });
    }

    handleRemove(e){
        console.log(e.target.value);
        fetch(`https://549e-36-73-71-108.ap.ngrok.io/delete${e.target.value}`,{
            method:"DELETE"
        }).then(res => this.reloadData());

    }
///cara mendelate

    componentDidMount () {
       this.reloadData(); 

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
                        {dat.email}
                    </p>
                <button value={dat.id} onClick={this.handleRemove}> Hapus </button>
            
                </div>);
            })}
        </div>
    );
}
}

export default Delete;