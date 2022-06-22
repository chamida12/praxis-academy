

import axios from "axios";
import React, { Component, Fragment } from "react";
import { Form, FormLabel,Button, FormControl} from "react-bootstrap";



class PostApi extends Component {
  constructor(props){
    super(props);
    this.state ={
      dataAPI:[],
      dataPost:{
        id:0,
        nama:'',
        email:'',
      }
    };
    this.inputChange = this.inputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    
  }

  reloadData(){
    axios.get("https://65f3-36-73-71-108.ap.ngrok.io/list").then(res => {
      this.setState({
        dataAPI: res.data.data
      })
    })
  }

  inputChange(e){
    let newdataPost ={...this.state.dataPost};
    newdataPost['id'] = new Date().getTime();
    newdataPost[e.target.name] = e.target.value;


    this.setState({
      dataPost : newdataPost
    },() => console.log(this.state.dataPost)
    );
    
  }

  onSubmitForm(){
    axios.post("https://65f3-36-73-71-108.ap.ngrok.io/create",this.state.dataPost)
    .then(() => {
      this.reloadData();
  });
}

  componentDidMount(){
    this.reloadData();
  }

    render(){
    return(
    <Fragment>
    <Form className="warna" >
    <h2> Silahkan Masukan Data Diri Anda!</h2>
    <Form.Group className="mb-3" >
      <FormLabel>Nama</FormLabel>
      <FormControl type="text" name="nama"  placeholder="Nama lengkap" onChange={this.inputChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" placeholder="Email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="lengkapi data anda" />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={this.onSubmitForm}>
    Submit
  </Button>
  </Form>
  
  </Fragment>
    )
}
    
}


export default PostApi;















// Tutorial YTb

// import React, { Component } from "react";
// import axios from "axios";
 


// class PostApi extends Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             id:'',
//             nama_lengkap:'',
//             email:'',
//         }
//     }
//     handleChange = (e) => {
//         this.setState({[e.target.name] : e.target.value})
//     }
//     TambahData = () => {
//         axios.post('https://f82b-36-73-71-108.ap.ngrok.io/create', {
//             nama_lengkap:this.state.nama_lengkap,
//             email: this.state.email
//         }).then(json => {
//             if(json.data.status === 400){
//                 this.setState({
//                     response: json.data.data
//                 })
//             }else{
//                 this.setState({
//                     response:json.data.data
//                 })
//             }
//         })
//     }

//     render(){
//         return(
//             <div>
//                 <h4>Tambah Data </h4>
//                 <input type="text" name="nama_lengkap"  value={this.state.nama_lengkap} onChange={this.handleChange} placeholder="Nama Lengkap"/>
//                 <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email"/>
          
//                 <button type="submit" onClick={this.TambahData}> Submit</button>    

//             </div>
//         )
//     }
        
//     }


// export default PostApi;





// TUTORIAL NIOMIC

// import React, { Component } from "react";
// import axios from "axios";

// class PostApi extends Component {
//     constructor(props){
//         super(props);
//         this.state ={
//             dataApi:[],
//             dataPost:{
//                 id:0,
//                 nama_lengkap:'',
//                 email:''
//             }
//         };

//         this.inputChange = this.inputChange.bind(this);
//         this.onSubmitForm = this.onSubmitForm.bind(this);
//     }
//     reloadData(){
//         axios.get('https://f82b-36-73-71-108.ap.ngrok.io/list').then(res =>{
//             this.setState({
//                 dataApi:res.data.data
//             });
//         });
//     }




//     inputChange(e){
//         let newdataPost = {...this.state.dataPost};
//         newdataPost['id'] = new Date ().getTime();
//         newdataPost[e.target.name] = e.target.value;
//         // console.log(e.target.value)
//         this.state({
//             dataPost:newdataPost
//         },
//         ()=>console.log(this.state.dataPost))
//     }

//     onSubmitForm(){
//         axios.post('https://f82b-36-73-71-108.ap.ngrok.io/create',this.state.dataPost).then(res => this.reloadData);
//     }




//     componentDidMount () {
      
         
//     this.reloadData();

//     }

// render (){
//     return (
//         <div>
//             <p>
//                 Cara Get Api
//             </p>
//             <input type='text' name="nama_lengkap" value={this.state.nama_lengkap} placeholder="Nama Lengkap" onChange={this.inputChange}/>
//             <input type='email' name="email" value={this.state.email} placeholder="Email"onChange={this.inputChange}/>
//             <button type="submit" onClick={this.onSubmitForm}> Klik </button>

        
//         </div>
//     );
// }
// }

// export default PostApi;