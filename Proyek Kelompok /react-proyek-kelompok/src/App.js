import React from 'react';
import { SetelahInput } from './pages/SetelahInput';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { InputData } from './pages/InputData';



const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<InputData/>}/>
        <Route path='/data' element={<SetelahInput/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App