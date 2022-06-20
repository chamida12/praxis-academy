import React, { Component } from "react";
import axios from "axios";

class Getcoba extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataApi:[]
        }
    }




    componentDidMount () {
        // fetch ('https://jsonplaceholder.typicode.com/posts')
        // .then(Response => Response.json ())
        //  .then (yoi  => { // .then (json => console.log(json))
        //     this.setState({
        //         dataApi: yoi
        //     }); CONSUM DENGAN FECTH

        //  });   
         
         axios.get('https://5119-114-142-171-63.ap.ngrok.io/list').then(res => {
             console.log("GET API: ", res.data.data);
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
                return(<div key={lucu}><p> 
                        {dat.nama_lengkap}
                         </p></div>);
            })}
        </div>
    );
}
}

export default Getcoba;