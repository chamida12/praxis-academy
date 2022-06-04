import React from "react";
import { Form, Button, Container } from "react-bootstrap";


const OK = () => {
  return (
    <div className="cover" >
    <Container id="main-container" className="d-grid h-100" style={{ marginTop: "150px"}}>
    <Form id="Login" className="text-center w-100">
            <h1 className="fs-2 fw-normal"> Alumni Pondok Leteh </h1>
      <Form.Text className="text-muted">
        Jika anda adalah alumni pondok leteh daftarkan diri anda melalui website ini.
      </Form.Text>
    <Form.Group className="mb-3" >
      <Form.Control type="name" placeholder="Nama lengkap" />
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Control type="email" placeholder="Email" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Anda alumni pondok leteh?" />
    </Form.Group>
    <Button variant="success" type="submit">Masuk</Button>
  </Form>
  </Container>
  </div>
  );
  }

  export default OK;