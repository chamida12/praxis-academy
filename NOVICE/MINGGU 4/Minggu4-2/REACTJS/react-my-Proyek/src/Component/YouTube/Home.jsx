import React from "react";
import { Routes,Route } from "react-router-dom";
import BlogPost from "../BlogPost/BlogPost";
import Product from "../../Container/Product";

function Home (){
    return (
        <Routes>
            <Route path="/" element={<BlogPost/>}></Route>
            <Route path="/aku" element={<Product/>}></Route>
        </Routes>
    )
}


export default Home;