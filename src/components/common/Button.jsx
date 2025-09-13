import React from 'react'

const Button = ({ children, className }) => {
  return (
    <div>
      <button className={`${className} bg-[#FF9534] rounded-[5px] sm:py-[20px]  sm:px-[30px] p-[10px] flex items-center transition-colors duration-150 ease-initial cursor-pointer sm:gap-[20px] gap-[10px] text-white text-[20px] font-normal hover:outline outline-[#FF9534] hover:text-[#FF9534] hover:bg-white`}>{children}</button>
    </div>
  )
}

export default Button