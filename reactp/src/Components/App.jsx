import React from 'react'
import Header from './Header'
function App() {
  const logoName='my practice';
  return (
    <div>
      <Header logo={logoName}/>
      <h1> App component</h1>
    </div>
  )
}

export default App
