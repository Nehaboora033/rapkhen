import React from 'react'

const Subheading = ({children,className}) => {
  return (
    <h3 className={`${className} text-[#FF9534] font-semibold text-[30px]`}>
      {children}
    </h3>
  )
}

export default Subheading