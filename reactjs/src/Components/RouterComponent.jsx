import React from 'react'
import {Routes,Route} from 'react-router-dom'
import HomeComponent from './pages/HomeComponent'
import AboutComponent from './pages/AboutComponent'
import ContactsComponent from './pages/ContactsComponent'
function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeComponent/>}/>
        <Route path="/about" element={<AboutComponent/>}/>
        <Route path="/contact" element={<ContactsComponent/>}/>
      </Routes>
    </div>
  )
}

export default RouterComponent
