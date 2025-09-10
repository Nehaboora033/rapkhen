import React from 'react'

const Heading = ({ children, className }) => {
  return (
    <h1 className={`${className} text-[41px] leading-[70px]`}>{children} </h1>
  )
}

export default Heading