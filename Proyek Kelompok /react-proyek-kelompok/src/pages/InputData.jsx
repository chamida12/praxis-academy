import { Card } from "antd";
import React, { useEffect, useState } from "react";
import './Input.css';

import { getUser, postUser } from "../Sevices";
import Input from "antd/lib/input/Input";
import { useNavigate } from "react-router-dom";


export const InputData = () => {
    // const [counter, setCounter] = useState(0);
    const navigate = useNavigate()
    const setListUser = useState([]);
    const [dataUser, setDataUser] = useState({nama: "", nama_lengkap: "", email: "", tanggal_lahir: ""});
    const  setIsEditing = useState(false);
    const [message, setMessage] = useState("");
    // const [name, setName] = useState("");
    // const [fullName, setFullName] = useState("");
    // const [email, setEmail] = useState("");
    // const [dateOfBirth, setDateOfBirth] = useState("");
    // console.log("DATA USER: ", dataUser);

    useEffect(() => {
        getUser(setListUser);
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }, [message]);
    return(
    
           <div className="site-card-border-less-wrapper">
            <Card style={{display:"flex", width: "800px",paddingTop: "50px", justifyContent:"center" }}>
            
            <div style={{ display: "flex", flexDirection: 'column' }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                
                    <Input 
                      
                        type="text" 
                        placeholder="Masukkan nama" 
                        value={dataUser?.nama} 
                        onChange={(e) => {
                            setDataUser({...dataUser, nama: e.target.value});
                            // setName(e.target.value);
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                
                    <Input 
                        type="text" 
                        placeholder="Masukkan nama lengkap" 
                        value={dataUser?.nama_lengkap}  
                        onChange={(e) => {
                            setDataUser({...dataUser, nama_lengkap: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
                
                    <Input 
                        type="email" 
                        placeholder="Masukkan email" 
                        value={dataUser?.email} 
                        onChange={(e) => {
                            setDataUser({...dataUser, email: e.target.value});
                        }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginBottom: 10 }}>
           
                    <Input 
                        type="text" 
                        placeholder="Masukkan tanggal lahir" 
                        value={dataUser?.tanggal_lahir} 
                        onChange={(e) =>  {
                            setDataUser({...dataUser, tanggal_lahir: e.target.value});
                        }}
                    />
                </div>
                </div>
                {
          
                    <div>
                        <button
                            
                            onClick={() => {
                                postUser(dataUser, setIsEditing, setDataUser, setMessage)
                                {navigate("/data")} }}
                        >
                            Save
                        </button>
                    </div> 
                }
                <div style={{ marginTop: 30 }}>
                    {message}
                </div>
            </Card>   
                </div>
        
    );
            }