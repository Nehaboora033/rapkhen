import React from 'react'

const Subheading = ({children,className}) => {
  return (
    <h3 className={`${className} text-[#FF9534] font-semibold sm:text-[30px] text-[27px]`}>
      {children}
    </h3>
  )
}

export default Subheading