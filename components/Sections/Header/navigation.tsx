// import {useState} from 'react'
// import Image from 'next/image'
// import Link from 'next/link';
// import { FaFacebook,FaLinkedin,FaTwitter,FaInstagram  } from 'react-icons/fa';
// import { isAbsolute } from 'path';

// export default function Nav(){

//     const [isOpen, setIsOpen] = useState(false)
//     return (
//       <div>
//   <div   className=' bg-[#ddbaba]  width-[428px] h-[72px] flex item-center justify-between 
//        py-4  px-3 md:px-8 md:bg-blue-600'>
    
//          <Image  src='/images/Logo.PNG'  alt="Logo" width={130} height={41}/>
   
//   <div  className='text-xl  font-bold  right-0'></div>
//   <button className='block md:hidden' onClick={ () =>setIsOpen(!isOpen)}>
  
//   <div className='space-y-1 mr-10'>
//         <div className='w-6 h-1 bg-gray-800'></div>
//         <div className='w-6 h-1 bg-gray-800'></div>
//         <div className='w-6 h-1 bg-gray-800'></div>
//   </div>
//           </button>
  
//     <nav   className={`${isOpen ? "absolute top-[72px] right-0 w-[80px] bg-[#ece7e7]" : "hidden"} md:flex md:space-x-6 md:items-center`}>
  
//     <div className={`${
//                 isOpen ? "space-y-5 ml-4" : "flex space-x-4"
//               } md:flex md:space-x-6 md:space-y-0`}
//             >
//     <Link href="./">Home</Link>
//               <Link href="./">About</Link>
//               <Link href="./">Contact Us</Link>/>
//               <Link href="./">Service</Link>
//     </div>
//   </nav>
//   </div>   
//   </div>
        
//     );
//     }