

import axios from "axios";
import React, { Component, Fragment } from "react";
import { Form, FormLabel,Button, FormControl} from "react-bootstrap";



class PostApi extends Component {
  constructor(props){
    super(props);
    this.state ={
      dataAPI:[],
      dataPost:{
        username:'',
        email:'',
      }
    };
    this.inputChange = this.inputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    
  }

  reloadData(){
    axios.get("http://192.168.1.71:5000/read").then(res => {
      console.log("GET API:", res.data);
      this.setState({
        dataAPI: res.data.data
      })
    })
  }

  inputChange(e){
    let newdataPost ={...this.state.dataPost};
    // newdataPost['id'] = new Date().getTime();
    newdataPost[e.target.name] = e.target.value;
    


    this.setState({
      dataPost : newdataPost
    },() => console.log(this.state.dataPost)
    );
    
  }

  onSubmitForm(){
  //   axios.post("http://192.168.1.71:5000/create",this.state.dataPost)
  //   .then((results) => {
  //     console.log("POST RESULTS;",results)
  //     console.log("bambang")
  //     this.reloadData();
  // })
  // .catch((eror)=>{
  //   console.log("EROR POST",eror);
  // });
  // console.log(this.state.dataPost)
  // axios({
  //   method: "POST",
  //   url: "http://192.168.1.71:5000/create",

  //   data: {
  //     quiz_name: "quizname",
  //   },
  // })
  // .then(res => {
  //   console.log("res", res.data.message);
  // })
  // .catch(err => {
  //   console.log("error in request", err);
  // });
  const json = JSON.stringify(this.state.dataPost);
  console.log(json)
  axios.post(
    "http://192.168.1.71:5000/create",
    this.state.dataPost
  ).then(res => {
    console.log("res", res.data.message);
  })
  .catch(err => {
    console.log("error in request", err);
  });
}

  componentDidMount(){
    // this.reloadData();
  }

    render(){
    return(
    <Fragment>
    <Form className="warna" >
    <h2> Silahkan Masukan Data Diri Anda!</h2>
    <Form.Group className="mb-3" >
      <FormLabel>Nama</FormLabel>
      <FormControl type="text" name="username"  placeholder="Nama lengkap" value={this.state.username}  onChange={this.inputChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" value={this.state.email} onChange={this.inputChange} placeholder="email" />
    </Form.Group>
  
    <Button variant="primary"  onClick={this.onSubmitForm}>
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
//             id:"",
//             username:"",
//             email:"",
//         }
//     }
//     handleChange = (e) => {
//         this.setState({[e.target.name] : e.target.value})
//     }
//     TambahData = () => {
//         axios.post("https://0104-36-72-212-11.ap.ngrok.io/create", {
//             username:this.state.username,
//             email: this.state.email
//         }).then(json => {
//           console.log("POST API :", json.data.data[0])
//             if(json.data.status === 200){
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
//                 <input type="text" name="username"  value={this.state.username} onChange={this.handleChange} placeholder="Nama Lengkap"/>
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