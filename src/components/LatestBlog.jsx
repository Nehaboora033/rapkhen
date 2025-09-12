import React from 'react'
import Container from './common/Container'
import Subheading from './common/Subheading'
import { Circle, Eye, Message, Morearticle_Arrow } from '../utils/icons'
import Description from './common/Description'
import { Blog } from '../utils/helper'


const LatestBlog = () => {
  return (
    <Container className={'pt-[142px] pb-[50px] '}>
      <div className='flex justify-between lg:flex-row flex-col max-lg:gap-y-[40px]  '>
        <div className='lg:w-[20%] flex items-center lg:justify-end justify-center'>
          <div className='flex '>
            <Subheading className={'relative z-[2]'}>
              Latest Blog
              <Circle className={'absolute top-[-10px] left-[-36px] z-[-1]'} />
            </Subheading>
          </div>
        </div>
        <div className='lg:w-[72%] flex sm:gap-[50px] gap-[40px] justify-between  sm:flex-row flex-col'>
          {Blog.map((item, index) => (
            <div key={index} className='lg:max-w-[344px] w-full rounded-[10px] shadow-blog  overflow-hidden'>
              <img src={item} alt="image" className='object-cover rounded-[5px] w-full h-[250px]' />
              <div className='pr-[28px] pb-[10px] pl-[30px]  pt-[15px]'>
                <Description className={'text-[20px]'}>
                  Lorem ipsum dolor sit met, consectetur cing elit, sed do abbey...
                </Description>
                <div className='flex justify-between flex-wrap'>
                  <Description className={'text-[20px] !font-medium'}>
                    Headmaster
                  </Description>
                  <div className='flex gap-[15px]'>
                    <div className='flex items-center gap-[12px]'>
                      <Message />
                      <span className='font-medium text-[20px]'>10</span>
                    </div>
                    <div className='flex items-center gap-[12px]'>
                      <Eye />
                      <span className='font-medium text-[20px]'>29</span>
                    </div>
                  </div>
                </div>
                <h4 className='font-normal text-[19px] mt-[20px]'>September 10, 2021 </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='flex justify-end'>
        <button className='bg-[#FF9534] rounded-[5px] py-[20px] px-[30px] flex items-center transition-colors duration-150 ease-initial cursor-pointer gap-[20px] text-white text-[20px] font-normal hover:outline outline-[#FF9534] mt-[50px] hover:text-[#FF9534] hover:bg-white '>
          More Articles
          <Morearticle_Arrow className={'hover:stroke-[#FF9534]'} />
        </button>
      </div>
    </Container>
  )
}

export default LatestBlog