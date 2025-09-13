import React from 'react'
import backgroundImage from '../../assets/webp/email-bg.webp'
import Subheading from './Subheading'
import Input from './Input'
import { Input_SendIcon } from '../../utils/icons'

const EmailSection = () => {
  return (
      <div className={`bg-cover bg-center bg-no-repeat z-[1] relative  py-[75px] after:content-[''] after:inset-0 after:absolute after:z-[0] after-img after:bg-cover after:bg-center after:bg-no-repeat`} style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='max-w-[924px] mx-auto sm:px-3 px-2 z-[2] relative'>
          <Subheading className={'text-center text-white pb-[60px] !font-medium'}>
            Better
            <span className='text-[#FF9534]'> education </span>
            for a better world <br className='hidden sm:block' />  An
            <span className='text-[#FF9534]'> investment </span>
            in
            <span className='text-[#FF9534]'> knowledge </span>
            pays the best
            <span className='text-[#FF9534]'> interest.</span>
          </Subheading>
          <Input
            type={'email'}
            placeholder={'Enter e-mail to recieve news letter'} className={`w-full relative z-[3] bg-transparent rounded-[30px] placeholder-white`}>
            <div className='bg-[#FF9534] rounded-r-[40px] flex items-center z-[4] cursor-pointer py-[17px] min-[500px]:pl-[23px] pl-[10px] pr-[10px] min-[500px]:pr-[33px] absolute top-[1px] right-[1px] bottom-[1px]'>
              <Input_SendIcon  className={'max-[420px]:size-[25px]'}/>
            </div>
          </Input>
        </div>
      </div>
  )
}

export default EmailSection