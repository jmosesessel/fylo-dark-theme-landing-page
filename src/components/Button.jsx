import React from 'react'

function Button(props) {
    const text = props.text
  return (
    <button className={ props.width + ' font-bold text-white text-sm h-12 lg:h-[3rem] rounded-full bg-gradient-to-tr from-cyan to-blue'}>{text}</button>
  )
}

export default Button