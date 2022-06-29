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

    handleRemove(e){
        console.log(e.target.value);
        fetch(`https://bfec-36-72-213-10.ap.ngrok.io/delete/${e.target.email}`,{
            method:"DELETE"
        }).then(res => console.log(res));

    }
///cara mendelate

    componentDidMount () {
         axios.get('https://bfec-36-72-213-10.ap.ngrok.io/read').then(res => {
            this.setState({
                dataApi:res.data.data
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
                        {dat.email}
                    </p>
                <button value={dat.email} onClick={this.handleRemove}> Hapus </button>
            
                </div>);
            })}
        </div>
    );
}
}

export default Delete;