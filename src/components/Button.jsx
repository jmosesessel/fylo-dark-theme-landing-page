import React from 'react'

function Button(props) {
    const text = props.text
  return (
    <button className={ props.width + ' font-bold text-white px-12 h-12 rounded-full bg-gradient-to-tr from-cyan to-blue'}>{text}</button>
  )
}

export default Button