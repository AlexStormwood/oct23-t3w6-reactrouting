import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App_ComponentRouting.jsx'
// import App from "./App_ObjectRouting.jsx";
import './styles/index.css'
// import Navbar from './components/Navbar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* Navbar won't work here because there's no router for it to reach up and access 
       <Navbar /> */}
      <App />
  </React.StrictMode>,
)
