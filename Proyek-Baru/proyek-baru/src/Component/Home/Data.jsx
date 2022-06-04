import React from "react";
import { Form, FormLabel,Button} from "react-bootstrap";
import Swal from "sweetalert2";

function Data (){
  const alert =()=>{

    Swal.fire({
      title: 'Custom width, padding, color, background.',
      width: 600,
      padding: '3em',
      color: '#716add',
      background: '#fff url(/images/trees.png)',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        center top
        no-repeat
      `
    })
  }
  
    return(
    <Form actstyle={{padding:"50px"}}>
    <h2> Silahkan Masukan Data Diri Anda!</h2>
    <Form.Group className="mb-3" >
      <FormLabel>Nama</FormLabel>
      <Form.Control type="name" placeholder="Nama lengkap" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <FormLabel>Daerah</FormLabel>
      <Form.Control type="daerah" placeholder="Daerah" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <FormLabel>Tahun Masuk</FormLabel>
      <Form.Control type="tahunm" placeholder="Tahun Masuk" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <FormLabel>Tahun Keluar</FormLabel>
      <Form.Control type="tahunk" placeholder="Tahun Keluar" />
    </Form.Group>
    <Form.Group className="mb-3" >
      <FormLabel>No.hp</FormLabel>
      <Form.Control type="no" placeholder="No.hp" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="lengkapi data anda" />
    </Form.Group>
    <Button onClick={()=> alert()} variant="primary" type="submit">
    Submit
  </Button>
  </Form>
  )
    
}

export default Data;
