import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from'./Components/App'




const app=document.getElementById('root')
ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
  <BrowserRouter>
   <App/>
  </BrowserRouter>

     
     
   </React.StrictMode>
)
