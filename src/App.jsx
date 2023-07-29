import React from 'react';
import "./App.css"
import { Routes, Route } from "react-router-dom"
import Desktop from './components/desktop/partials/Desktop';
import Google from './components/google/partials/google';
import Pc from './components/pc/partials/pc';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Desktop/>}/>
        <Route path='/google' element={<Google/>}/>
        <Route path='/pc' element={<Pc/>}/>
      </Routes>
    </div>
  )
}

export default App
