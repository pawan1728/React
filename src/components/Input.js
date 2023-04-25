import React from 'react'

export default function Input({onChange,className,type,placeHolder,value,onClick}) {
  return (
    <input type={type} className={className} placeholder={placeHolder} value={value} onChange={onChange} onClick={onClick}/>
  )
}
