import React from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import Description from './Description'
import { Footer_Links } from '../../utils/helper'

const Footer = () => {
  const Year = new Date();
  return (
    <>
      <Container className={'mb-[50px]'}>
        <div className='flex justify-between sm:my-[50px] my-[30px] flex-wrap gap-y-6'>
          <div className='lg:w-[25%] '>
            <Link to={'/'} className='font-medium text-[30px] mb-[14px]'>
              Logo
            </Link>
            <Description className={'sm:text-[20px]'}>
              Rapkhen is an outstanding Nursery & Primary school targeting educational System, helping Kids to read and write and to establish strong identity.
            </Description>
          </div>
          <div className='lg:w-[70%] flex md:gap-[48px] gap-[20px] max-[680px]:flex-col'>
            {Footer_Links.map((item, index) => {
              return (
                <ul key={index} >
                  <li className='font-600 sm:text-[25px] text-[20px] text-[#FF9534] mb-[20px] whitespace-nowrap leading-[21px]'>
                    {item.title}
                  </li>
                  {item.links.map((linkItem, i) => {
                    const Icon = linkItem.icon;
                    const isExternal =
                      linkItem.href.startsWith("http") || linkItem.href.startsWith("mailto") ||
                      linkItem.href.startsWith("tel");

                    // Choose alignment depending on the section title
                    const alignment =
                      item.title === "Social Contact" ? "items-center" : "items-start";

                    return (
                      <li
                        key={i}
                        className={`flex ${alignment} sm:gap-3 gap-2 mb-[16px]`}
                      >
                        {Icon && (
                          <span className="w-6 h-6 flex-none mt-1">
                            <Icon className="w-full h-full text-black" />
                          </span>
                        )}

                        {isExternal ? (
                          <a
                            href={linkItem.href}
                            className="sm:text-[20px]  font-normal hover:text-[#FF9534] transition-colors duration-100 ease-linear text-black"
                          >
                            {linkItem.text}
                          </a>
                        ) : (
                          <Link
                            to={linkItem.href}
                            className="sm:text-[20px] font-normal hover:text-[#FF9534] transition-colors duration-100 ease-linear text-black"
                          >
                            {linkItem.text}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )
            })}
          </div>
        </div>
        <div>
          <h4 className='font-medium sm:text-[17px] text-[16px] text-center text-[#808080] '>
            Copyright © {Year.getFullYear()}. All Right Reserved.
          </h4>
        </div>
      </Container >
    </>
  )
}

export default Footer