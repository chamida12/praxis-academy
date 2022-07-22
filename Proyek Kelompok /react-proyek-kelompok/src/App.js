import React from 'react';
import { SetelahInput } from './pages/SetelahInput';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { InputData } from './pages/InputData';
import FilterId from './ConsumAPI/Filter/FilterId';



const App = () => {

  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<InputData/>}/>
        <Route path='/data' element={<SetelahInput/>}/>
        <Route path='/filter' element={<FilterId/>}/>
      </Routes>
      </BrowserRouter>
   
    </div>
  )
}

export default App