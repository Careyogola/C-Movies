import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Loginpage from './auth/Loginpage.jsx'
import Signuppage from './auth/Signuppage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<App/>}/>
      <Route path='/signup' element = { <Signuppage /> }/>
      <Route path='/login' element = { <Loginpage /> }/>
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
