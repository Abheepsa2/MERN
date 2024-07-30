// import React from 'react'

// export default function header() {
//   return (
//     <div className="my-header">
//       <h1> i am header </h1>
//     </div>
//   )
// }
// import React from 'react'

// function header(props) {
//   const {logo}=props
//   return (
//     <div>
//       <h4>
//         {logo}
//       </h4>
//     </div>
//   )
// }

// export default header
import React from 'react'

function header(props) {
  const{logo}=props
//  console.log(props.logo)
  return (
    <div>
      <h4>
  {props.logo}
      </h4>
    </div>
  )
}

export default header

