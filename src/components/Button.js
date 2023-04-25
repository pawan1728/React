// const Button = () =>{
//     return(
//         <button>Filter</button>
//     )
// }
// export default Button


import React from 'react'

export default function Button({className,BTN_Name,onClick}) {
  return (
    <button onClick={onClick}  className={className}>{BTN_Name}</button>
  )
}
