
import axios from "axios";
import React, { Component, Fragment } from "react";
import { Form, FormLabel,Button, FormControl} from "react-bootstrap";



class CobaPost extends Component {
  constructor(props){
    super(props);
    this.state ={
      dataAPI:[],
      dataPost:{
        id:0,
        username:'',
        email:'',
      }
    };
    this.inputChange = this.inputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    
  }

  reloadData(){
    axios.get("https://d15c-36-72-213-206.ap.ngrok.io/read").then(res => {
      console.log("GET API:", res.data.data[0]);
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
    axios.post("https://d15c-36-72-213-206.ap.ngrok.io/create",this.state.dataPost)
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
      <FormControl type="text" name="username"  placeholder="Nama lengkap" onChange={this.inputChange}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" name="email" placeholder="Email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="lengkapi data anda" />
    </Form.Group>
    <Button variant="primary" onClick={this.inputChange}>
    Submit
  </Button>
  </Form>
  
  </Fragment>
    )
}
    
}


export default CobaPost;





// import axios from "axios";

// async function CobaPost(){
//   const payload ={
//     username: "aul",
//     email: "aku@gmail.com"
//   }




// await axios.post('https://d15c-36-72-213-206.ap.ngrok.io/create',payload)
// .then((results) => {
//   console.log("POST RESULTS",results);
// })
// .catch((error) => {
//   console.log("ERROR POST", error);
// })
// }


// export default CobaPost;