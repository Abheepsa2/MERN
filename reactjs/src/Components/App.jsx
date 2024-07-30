// // function MyApp(){
// //     const name="react js"
// //     return(
// //       <div>
// //       <h1>Hello {name}</h1> 
// //       <h1> hi</h1>
// //       </div>
// //     )
// //   }
// //   export default MyApp;
// // import React from 'react'

// // export default function App() {
// //   return (
// //     <div>
      
// //     </div>
// //   )
// // }
// import React from 'react'
// import Header from'./Header'
// import Menu from'./Menu'
// import Footer from'./Footer'

// // function App() {
// //   const logoName="reactjss";
// //  const users=['ram','sita','gita','hari']
// //   return (
// //     <div className="container">
// //       <Header logo={logoName} name="ram"/>
// // <Menu/>
// //       <h1>Hellow  app component</h1>
// //       <ul>
// //         {users && users.map((user,index)=>(
// //           <li key={index}>{user}</li>
// // ))}
// //       </ul>
// //     <Footer/>
// //     </div>
// //   )
// // }


// export default App

import Header from'./Header'
import Menu from './Menu'
import Footer from'./Footer'
import React from 'react'
import RouterComponent from './RouterComponent'
import ContactsComponent from './pages/ContactsComponent'


function App() {
    const logoName='react morning'
  return (
    <div className='container'>
    
     <ContactsComponent></ContactsComponent>
      <RouterComponent/>
      <h1>hello</h1>
    
   
    </div>
  )
}

export default App


