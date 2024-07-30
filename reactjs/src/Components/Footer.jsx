// import React from 'react'

// export default function Footer() {
//  const myStyle={
// backgroundColor:'black',
// color:'white',
// padding:'10px',
// position:'fixed',
// left:'0',
// bottom:'0',
// width:'100%',
// textAlign:'center',



//  }
//     return (
//     <div style={myStyle}>
//       <h1> i am footer component</h1>
//     </div>
//   )
// }
import React from 'react'

function Footer(props) {
  props.users.push('rudra')
  console.log(props.users)
  // props.username='sophia'
  // console.log(props.username)
  
  return (
    <div>
      <h1> user list</h1>
      {
        props.users.map((user,index) =>(
          <h2 key ={index}> {user}</h2>
        ))
      }
    </div>
  )
}

export default Footer
