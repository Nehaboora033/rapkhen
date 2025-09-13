import React from 'react'

const Heading = ({ children, className }) => {
  return (
    <h1 className={`${className} sm:text-[41px] text-[32px] leading-[70px]`}>{children} </h1>
  )
}

export default Heading