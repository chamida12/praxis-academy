import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Data from "./Component/Home/Data";
import Login from "./Component/Login/Login";
// import Login from "./Component/Login/Login"




function App(){
  return(
    <header>
   <Router>
      <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Data/>}/>
      </Routes>
     
    </Router>

    </header>
 
    
  )
}

export default App;
