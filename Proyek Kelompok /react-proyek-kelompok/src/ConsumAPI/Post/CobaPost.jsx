import React, {Fragment}from "react";
import { useState } from "react";
import { Form,FormControl,FormLabel,Button } from "react-bootstrap";
import Swal from "sweetalert2";


function CobaPost (){
    const [nama,setNama] = useState("");
    const [email,setEmail] = useState(""); 
    const [pesan,setPesan] = useState ("");

    let handleSubmit = async (e) => {
        e.preventDefault ();
        try {
            
            let res = await fetch("https://65f3-36-73-71-108.ap.ngrok.io/creat",{
                method: "POST",
                body:JSON.stringify({

                'nama': nama,
                'email': email,

                }),
            });

             await res.json();
            if (res.status === 400){
                setNama("");
               
                setEmail("");
                setPesan ("Sukses");
            }else{
                setPesan (" Gagal");
            }
        }catch(err){
            console.log(err);
        }
    };

    const alert =()=>{
      Swal.fire({
        title:"Data Anda Sudah Berhasil Di Simpan!",
        icon: 'success'
      });
    };
    return(
      <Fragment>
       
           
           <Form onSubmit={handleSubmit} style={{padding:"50px"}}>
           <h2> Silahkan Masukan Data Diri Anda!</h2>
           <Form.Group className="mb-3">
             <FormLabel>Nama</FormLabel>
             <FormControl style={{width:"450px"}} type="text" 
             name="nama"  
             placeholder="Nama lengkap" 
             onChange={(e) => setNama (e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Email</Form.Label>
             <Form.Control style={{width:"450px"}}  type="email" 
             name="email" 
             placeholder="Email" 
             onChange={(e) => setEmail (e.target.value)}/>
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicCheckbox">
             <Form.Check type="checkbox" label="lengkapi data anda" />
           </Form.Group>
           <Button onClick={()=> alert()} variant="outline-success" type="submit" >
           Submit
         </Button>
         <div  className="pesan">{pesan ? <p>{pesan}</p> : null}</div>
         </Form>
        
        </Fragment>
    );
}
export default CobaPost;
