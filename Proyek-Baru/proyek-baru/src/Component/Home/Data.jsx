import axios from "axios";
import React, { Component, Fragment } from "react";
import { Form, FormLabel,Button, FormControl} from "react-bootstrap";
import Daftar from "./Daftar";


class Data extends Component {
  constructor(props){
    super(props);
    this.state ={
      dataAPI:[],
      dataPost:{
        id:0,
        Nama:'',
        Daerah:'',
        tahunMasuk:'',
        tahunKeluar:'',
        noHp: '',
        Email:'',
      }
    };
    this.inputChange = this.inputChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    
  }

  reloadData(){
    axios.get("https://2222-114-142-169-47.ap.ngrok.io").then(res => {
      this.setState({
        dataAPI: res.data
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
    axios.post("https://2222-114-142-169-47.ap.ngrok.io",this.state.dataPost).then(() => {this.reloadData();
  });
}

  componentDidMount(){
    this.reloadData();
  }

    render(){
    return(
    <Fragment>
    <Daftar/>
    <Form style={{padding:"50px"}}>
    <h2> Silahkan Masukan Data Diri Anda!</h2>
    <Form.Group className="mb-3">
      <FormLabel>Nama</FormLabel>
      <FormControl style={{width:"450px"}} type="text" name="Nama"  placeholder="Nama lengkap" onChange={this.inputChange}/>
    </Form.Group>
    <Form.Group className="mb-3" >
      <FormLabel>Daerah</FormLabel>
      <FormControl style={{width:"450px"}}  type="daerah" name="Daerah" placeholder="Daerah" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <FormLabel>Tahun Masuk</FormLabel>
      <Form.Control style={{width:"450px"}}  type="tahunm" name="tahunMasuk" placeholder="Tahun Masuk" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <FormLabel>Tahun Keluar</FormLabel>
      <Form.Control style={{width:"450px"}}  type="tahunk" name="tahunKeluar" placeholder="Tahun Keluar" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <FormLabel>No.hp</FormLabel>
      <Form.Control style={{width:"450px"}}  type="no" name="noHp" placeholder="No.hp" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control style={{width:"450px"}}  type="email" name="Email" placeholder="Email" />
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


export default Data;






// import axios from "axios";
// import React, { Component, Fragment } from "react";
// import { Form, FormLabel,Button, FormControl} from "react-bootstrap";
// import Daftar from "./Daftar";


// class Data extends Component {
//   constructor(props){
//     super(props);
//     this.state ={
//       dataAPI:[],
//       dataPost:{
//         id:0,
//         Nama:'',
//         Daerah:'',
//         tahunMasuk:'',
//         tahunKeluar:'',
//         noHp: '',
//         Email:'',
//       }
//     };
//     this.inputChange = this.inputChange.bind(this);
//     this.onSubmitForm = this.onSubmitForm.bind(this);
    
//   }

//   reloadData(){
//     axios.get("http://127.0.0.1:5000/read").then(res => {
//       this.setState({
//         dataAPI: res.data
//       })
//     })
//   }

//   inputChange(e){
//     let newdataPost ={...this.state.dataPost};
//     newdataPost['id'] = new Date().getTime();
//     newdataPost[e.target.name] = e.target.value;


//     this.setState({
//       dataPost : newdataPost
//     },() => console.log(this.state.dataPost)
//     );
    
//   }

//   onSubmitForm(){
//     axios.post("http://127.0.0.1:5000/read",this.state.dataPost).then(() => {this.reloadData();
//   });
// }

//   componentDidMount(){
//     this.reloadData();
//   }

//     render(){
//     return(
//     <Fragment>
//     <Daftar/>
//     <Form style={{padding:"50px"}}>
//     <h2> Silahkan Masukan Data Diri Anda!</h2>
//     <Form.Group className="mb-3">
//       <FormLabel>Nama</FormLabel>
//       <FormControl style={{width:"450px"}} type="text" name="Nama"  placeholder="Nama lengkap" onChange={this.inputChange}/>
//     </Form.Group>
//     <Form.Group className="mb-3" >
//       <FormLabel>Daerah</FormLabel>
//       <FormControl style={{width:"450px"}}  type="daerah" name="Daerah" placeholder="Daerah" />
//     </Form.Group>
//     <Form.Group className="mb-3" >
//       <FormLabel>Tahun Masuk</FormLabel>
//       <Form.Control style={{width:"450px"}}  type="tahunm" name="tahunMasuk" placeholder="Tahun Masuk" />
//     </Form.Group>
//     <Form.Group className="mb-3" >
//       <FormLabel>Tahun Keluar</FormLabel>
//       <Form.Control style={{width:"450px"}}  type="tahunk" name="tahunKeluar" placeholder="Tahun Keluar" />
//     </Form.Group>
//     <Form.Group className="mb-3" >
//       <FormLabel>No.hp</FormLabel>
//       <Form.Control style={{width:"450px"}}  type="no" name="noHp" placeholder="No.hp" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicEmail">
//       <Form.Label>Email</Form.Label>
//       <Form.Control style={{width:"450px"}}  type="email" name="Email" placeholder="Email" />
//     </Form.Group>
//     <Form.Group className="mb-3" controlId="formBasicCheckbox">
//       <Form.Check type="checkbox" label="lengkapi data anda" />
//     </Form.Group>
//     <Button variant="primary" type="submit" onClick={this.onSubmitForm}>
//     Submit
//   </Button>
//   </Form>
  
//   </Fragment>
//     )
// }
    
// }


// export default Data;
