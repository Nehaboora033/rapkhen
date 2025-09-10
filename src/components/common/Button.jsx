import React from 'react'

const Button = ({children,className}) => {
  return (
    <div>
        <button className={`${className} text-white bg-[#FF9534] rounded-[5px] py-[20px] px-[30px]`}>{children}</button>
    </div>
  )
}

export default Button