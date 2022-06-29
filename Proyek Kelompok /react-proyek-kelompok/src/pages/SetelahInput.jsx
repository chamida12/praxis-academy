import React, { useEffect, useState } from "react";

import { getUser, deleteUser } from "../Sevices";

export const SetelahInput = () => {
    // const [counter, setCounter] = useState(0);
    const [listUser, setListUser] = useState([]);
    const  setDataUser = useState({nama: "", nama_lengkap: "", email: "", tanggal_lahir: ""});
    const setIsEditing = useState(false);
    const [message, setMessage] = useState("");
    // console.log("DATA USER: ", dataUser);

    useEffect(() => {
        getUser(setListUser);
        setTimeout(() => {
            setMessage("");
        }, 3000);
    }, [message]);

    return (
    
        <div style={{ display: "flex", height: "100vh" }}>
            <div style={{ display: "flex", width: "50%", flexDirection: 'column' }}>
                <table>
                    <tr>
                        <th>Nama</th>
                        <th>Nama Lengkap</th>
                        <th>Email</th>
                        <th>Tanggal Lahir</th>
                        <th>Actions</th>
                    </tr>
                    {
                        listUser.map((data, index) => 
                        <tr key={index}>
                            <td>{data.nama}</td>
                            <td>{data.nama_lengkap}</td>
                            <td>{data.email}</td>
                            <td>{data.tanggal_lahir}</td>
                            <td>
                                <div>
                                    <button
                                        onClick={() => {
                                            setIsEditing(true);
                                            setDataUser(data);
                                        }}
                                    >
                                        edit
                                    </button>
                                    <button 
                                        onClick={() => {
                                            // console.log(data.id);
                                            deleteUser(data.id, setMessage);
                                        }}
                                    >
                                        delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                        )
                    }
                </table>
            </div>
            </div>
            
            );
            }