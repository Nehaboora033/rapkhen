import React from 'react'
import Container from './common/Container'
import Subheading from './common/Subheading'
import { Circle } from '../utils/icons'
import Description from './common/Description'
import { Our_Activity } from '../utils/helper'

const OurActivities = () => {
  return (
    <div className="bg-[#F2F2F2] relative z-[-2]">
      <Container className="pt-[42.76px] pb-[50px]">
        <div className="flex justify-center relative">
          <Subheading className="text-[#FF9534] relative z-[1]">
            Our Activities
            <Circle className="absolute top-[-10px] left-[-38px] z-[-1]" />
          </Subheading>
        </div>
        <div className='flex justify-between mt-[50px] flex-wrap gap-y-6'>
          {Our_Activity.map((item, index) => (
            <div key={index} className='lg:max-w-[491px] flex gap-[20px] max-[500px]:flex-col '>
              <img src={item.img} alt="image" className='shadow-activiy  rounded-[10px] object-cover min-[500px]:w-[188px] h-[258px] w-full' />
              <div>
                <Subheading className={'!text-[25px] mb-[10px] !text-[#22343D]'}>
                  {item.title}
                </Subheading>
                <Description className={'text-[17px]'}>
                  {item.description}
                </Description>
              </div>
            </div>
          ))}


        </div>
      </Container>
    </div>
  )
}

export default OurActivities