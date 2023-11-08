import React from 'react';
import { createBrowserRouter, RouterProvider, Route, Routes} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import Sidebar from './pages/Sidebar';

 

function App() {
  return (

    <div style={{display:'flex', width:'100vw'}}>
      <Sidebar /> 
        <div style={{display: 'flex', margin:'auto', width:'85%'}}>
          <Routes>
            <Route  path='/' element={<Home/>}/>
            <Route  path='/login' element={<Login/>}/>
          </Routes>
        </div>
    </div>

    );
}

export default App;
