import React from 'react'

const Input = ({ children, className, placeholder, type }) => {
  return (
    <div className='w-full relative input-wrapper'>
      <input type={type} placeholder={placeholder} className={`${className} border border-white rounded-[40px] text-white  font-normal  min-[500px]:py-[20px] py-[15px] min-[500px]:pl-[20px] pl-[10px] min-[500px]:pr-[120px] min-[420px]:pr-[80px] pr-[50px]  min-[500px]:h-[80px] h-[70px] `}/>
        {children}
    </div>
  )
}

export default Input