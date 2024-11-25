"use client";
import Image from 'next/image';
import Link from 'next/link'
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Header() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <div>
   <div
        className="h-[54px] pl-12 border-[1px] bg-[rgb(247,247,247,1)] hidden md:flex flex-col items-start justify-center
        space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0"
      >
        {/* <div className="flex justify-between  max-w-screen-lg mx-auto my-2"> */}
          {/* Contact Info */}
          <div className='md:ml-[100px]'>
          <p className="flex items-center space-x-3">
            <span>Phone: 03122979793</span>
            <span className="h-[30px] w-[1px] border border-[#676767]"></span>
            <span>Email: zainmd.htm@gmail.com</span>
          </p>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-6 mr-32">
          <Link href='./'><FaFacebook size={30} /></Link>
          <Link href='./'><FaTwitter size={30} /></Link>
          <Link href='https://www.linkedin.com/in/zain-khan-coding/' target='_blank'><FaLinkedin size={30} /></Link>
          <Link href='./'><FaInstagram size={30} /></Link>
          </div>
        </div>      
<div   className=' bg-[#FFFFFF]  width-[428px] h-[72px] flex item-center justify-between border-[1px] border-[#000000]
     py-4  px-3 md:px-20 md:bg-[rgb(247,247,247,1)] ] md:border-[1px] md:border-[#676767]'>
  
       <Image  src='/images/logo.PNG'  alt="Logo" width={130} height={41}/>
 
<div  className='text-xl  font-bold  right-0'></div>
<button className='block md:hidden' onClick={ () =>setIsOpen(!isOpen)}>

<div className='space-y-1 mr-10'>
      <div className='w-6 h-1 bg-gray-800'></div>
      <div className='w-6 h-1 bg-gray-800'></div>
      <div className='w-6 h-1 bg-gray-800'></div>
</div>
        </button>

  <nav   className={`${isOpen ? "absolute top-[72px] right-0 w-[80px]  bg-[#ece7e7]" 
      : "hidden"} md:flex md:space-x-3 md: md:text-[22px] font-bold text-[#000000]
        `} style={{fontFamily: 'Roboto'}}>

  <div className={`${
              isOpen ? "space-y-4" : "flex space-x-4"
            } md:flex md:space-x-7 md:space-y-0 md:mr-[200px]`}
          >

<span className='block'><Link href="./"  >Home</Link></span>
             <span className='block' ><Link href="./">Courses</Link></span>
             <span className='block'><Link href="./">Services</Link></span>
             <span className='block'><Link href="./">Achievement</Link></span>
             <span className='block'><Link href="./">About Us</Link></span>
             <span className='block'><Link href="./">Testimonial</Link></span>
</div>

<div className='md:flex md:items-center md:space-x-0 md:justify-between md:space-y-0 space-y-3 '>
            {/* <span className='md:w-[221px] md:justify-between md:space-x-7 md:space-y-0 space-y-4'> */}
             <span className='block'><button  className='w-[80px]  rounded-[5px] h-[40px] border-[1px] border-[#676767]
            '>Login</button></span>
            <span className='block'>
             <button className=' w-[80] md:w-[95px] mx-[100px] h-[40px] bg-black text-white rounded-[5px]'>Sing Up</button>
            </span>


  </div>
</nav>
</div>   
</div>
      
  );
}
