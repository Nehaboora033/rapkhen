import React from 'react'

const Description = ({children,className}) => {
  return (
    <h4 className={`${className} font-normal text-[#22343D]`}>{children}</h4>
  )
}

export default Description