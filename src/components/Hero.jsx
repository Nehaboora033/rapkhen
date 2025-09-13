import React from 'react'
import Container from './common/Container'
import backgroundImage from '../assets/webp/hero-bgimg.webp'
import Button from './common/Button'
import { Button_Arrow, Swiper_Arrow } from '../utils/icons'
import Heading from './common/Heading'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from 'react-router-dom'

const Hero = () => {
  return (

    <div className='bg-center relative bg-cover bg-no-repeat z-[1] after:content-[""] after:inset-0 after:bg-cover after:bg-center after:bg-no-repeat after:w-full after-heroimg after:z-[0] after:absolute' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <Container className={'text-white relative z-[2] sm:py-[120px] py-[80px]'}>
        <div className='max-w-[812px] block mx-auto'>
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Autoplay]}
            navigation={
              {
                prevEl: '.prevbtn',
                nextEl: '.nextbtn',
              }}
            loop={true}
            autoplay={{               // 👈 always declare autoplay at root
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              768: { autoplay: false }, // turn it off ≥768px
            }}
            speed={700}>
            <SwiperSlide>
              <Heading className={'font-medium leading-[70px]'}>
                <>
                  A wonderful <span className='font-semibold uppercase text-[#FF9534]'>first </span>out of home learning
                  <span className='font-semibold uppercase text-[#FF9534]'> Experience</span> For you Child.
                </>
              </Heading>
            </SwiperSlide>
            <SwiperSlide >
              <Heading>
                <>
                  Better <span className='font-semibold uppercase text-[#FF9534]'>education </span>for a better world
                  An investment in <span className='font-semibold uppercase text-[#FF9534]'>knowledge.</span>
                </>
              </Heading>
            </SwiperSlide>
          </Swiper>

          <Link to={'news'}>
            <Button className={'sm:mt-[57px] mt-[20px] '}>
              More Articles
              <Button_Arrow className={'hover:stroke-[#FF9534]'} />
            </Button>
          </Link>
        </div>
        {/* right button swiper */}
        <button className='nextbtn flex items-center cursor-pointer justify-center p-[8px] lg:p-[27px] outline-white rounded-[5px] outline-[3px] absolute right-[14px] top-[50%] lg:-translate-y-1/2 max-md:hidden '>
          <Swiper_Arrow />
        </button>
        {/* left button swiper */}
        <button className='prevbtn flex items-center cursor-pointer justify-center p-[8px] lg:p-[27px] outline-white rounded-[5px] outline-[3px] rotate-180 absolute left-[14px] top-[50%] lg:-translate-y-1/2 max-md:hidden '>
          <Swiper_Arrow />
        </button>
      </Container >
    </div >

  )
}

export default Hero