import React from 'react'
import { Route, Routes } from 'react-router-dom';


import  Downloading  from './pages/downloading__window/dload__win.jsx';
import Auth from './pages/auth__window/auth.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element = {<Auth />}/>
      <Route path='/profile' element = {<Downloading/>}/>
    </Routes>
  )
}

export default App;