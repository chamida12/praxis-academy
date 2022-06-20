import React, { Component } from "react";
import axios from "axios";

class PostApi extends Component {
    constructor(props){
        super(props);
        this.state ={
            dataApi:[],
            dataPost:{
                id:0,
                nama_lengkap:'',
                email:''
            }
        };

        this.inputChange = this.inputChange.bind(this);
        this.onSubmitForm = this.onSubmitForm.bind(this);
    }
    reloadData(){
        axios.get('https://5119-114-142-171-63.ap.ngrok.io/list').then(res =>{
            this.setState({
                dataApi:res.data
            });
        });
    }




    inputChange(e){
        let newdataPost = {...this.state.dataPost};
        newdataPost['id'] = new Date ().getTime();
        newdataPost[e.target.name] = e.target.value;
        // console.log(e.target.value)
        this.state({
            dataPost:newdataPost
        },
        ()=>console.log(this.state.dataPost))
    }

    onSubmitForm(){
        axios.post('https://5119-114-142-171-63.ap.ngrok.io/creat',this.state.dataPost).then(res => this.reloadData);
    }




    componentDidMount () {
      
         
    this.reloadData();

    }

render (){
    return (
        <div>
            <p>
                Cara Get Api
            </p>
            <input type='text' name="nama_lengkap" placeholder="Nama Lengkap" onChange={this.inputChange}/>
            <input type='email' name="email" placeholder="Email"onChange={this.inputChange}/>
            <button type="submit" onClick={this.onSubmitForm}> Klik </button>

        
        </div>
    );
}
}

export default PostApi;