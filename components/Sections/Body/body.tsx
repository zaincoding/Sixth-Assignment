
import Style from '@/components/Sections/Body/body.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";


export default function Body(){

    return(

        <div>

        <div className='relative my-[40] '>

<div className='mx-[80px] my-[100px]'>
   <ul className="flex flex-row space-x-4">   <li className={` ${Style.circleItemB } className='mx-[30px] `}></li>
   <li className={Style.circleItem }></li>
  <li className={Style.circleItem }></li>
  <li className={Style.circleItem }></li>
   <li className={Style.circleItem }></li>
   <div  className='md:space-x-[1050px] space-x-[50px] md:ml-[100px]'>
   <p><Link href='#'><Image src='/images/buttons/Image1.PNG' alt='button-img' width={50} height={50} className='absolute md:mx-[1000px] ' /></Link></p>
   <p><Link href='#'><Image src='/images/buttons/Image2.PNG' alt='button-img' width={50} height={50} className='absolute md:mx-[1200px mx-[25px]' /></Link></p>
   </div>
 </ul>
 </div>

</div>


{/*
// ubscribe to our news letter start  */}

<div className="md:flex justify-between items-start my-[200px]  hidden">
  <div className="text-left mx-[100px] ]">
    <p className="font-bold">Subscribe to our newsletter</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
  </div>
  <div className="text-right mx-[300px] relative">
    <p className="font-bold border-black border-[1px] py-1 rounded-[10px] absolute"><input type='text' name='search' placeholder=' Enter Your Email'></input>
    </p> <p><button className='bg-gray-100 hover:bg-gray-200 w-[140px] absolute mx-[-120px] p-2 rounded-[10px] border-black border-[1px]'>Subscrib</button></p>
    <p className='my-[50px] whitespace-nowrap'>By subscribing you agree to with our Privacy Policy</p>
  </div>
</div>




<div  className='gird grid-col-1 md:grid grid-cols-4 gap-4 my-[100px] justify-items-center  bg-gray-200'>
     <div className='text-left border rounded-[5px]'>
     <Image  src='/images/Logo.PNG'  alt="Logo" width={130} height={41}/>
    </div>



    <div className='text-left border rounded-[5px]'>     
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Courses</h1>
    <div  className='leading-[40px]'>
    <p>Business</p>
    <p>Development</p>
    <p>Technology</p>
    <p>Design</p>
    <p>Programming</p>
    </div> 
          </div>
          


          <div className='text-left border rounded-[5px]'>     
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Resources</h1>
    <div  className='leading-[40px]'>
    <p>Career</p>
    <p>Resume</p>
    <p>Learning</p>
    <p>Interview Preparation</p>
    <p>Jobs</p>
    </div> 
          </div>




          <div className='text-left border rounded-[5px] '>     
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>About Us</h1>
    <div  className='leading-[40px]'>
    <p>Contact</p>
    <p>Help/Support</p>
    <p>FAQ</p>
    <p>Terms and Conditions</p>
    <p>Partners</p>
    </div> 
          </div>

   </div>

<div className='hidden md:block'>
   <div className="md:flex flex-row  my-[50px] hidden">
  <div className="w-full h-[2px] bg-black  mx-[100px]"></div>
</div>


<div className='md:flex flex-row mx-[100px] '>
<p>2023 Ddsgnr.All right reserved.</p>
<p className='text-gray-950 underline mx-[30px]'><Link href='#'>Privacy Policy</Link></p>
<p className='text-gray-950 underline mx-[30px]'><Link href='#'>Terms of Service</Link></p>
<p className='text-gray-950 underline mx-[30px]'><Link href='#'>Cookies Settings</Link></p>

<div className='ml-auto flex space-x-[30px]'>
<p className='text-gray-950 underline'><Link href='https://www.linkedin.com/in/zain-khan-coding/' target='_blank'><FaLinkedin size={30} /></Link></p>
<p className='text-gray-950 underline '><Link href='#'><FaTwitter size={30} /></Link></p>
<p className='text-gray-950 underline '><Link href='#'><FaFacebook size={30} /></Link></p>
<p className='text-gray-950 underline '><Link href='#'><FaInstagram size={30} /></Link></p>
</div>
</div>
</div>

<div className='md:hidden  block leading-[49px]'>
   <div className="flex flex-row  ">
  <div className="w-full h-[2px] bg-black  mx-[100px]"></div>
</div>

<p >2023 Ddsgnr.All right reserved.</p>
<div className='flex felx-row w-full space-x-[12px] leading-[49px]  '>
<p className='text-gray-950 underline '><Link href='#'>Privacy Policy</Link></p>
<p className='text-gray-950 underline '><Link href='#'>Terms of Service</Link></p>
<p className='text-gray-950 underline '><Link href='#'>Cookies Settings</Link></p>
</div>


<div className='ml-[80px] flex space-x-[30px]'>
<p className='text-gray-950 underline'><Link href='https://www.linkedin.com/in/zain-khan-coding/' target='_blank'><FaLinkedin size={30} /></Link></p>
<p className='text-gray-950 underline '><Link href='#'><FaTwitter size={30} /></Link></p>
<p className='text-gray-950 underline '><Link href='#'><FaFacebook size={30} /></Link></p>
<p className='text-gray-950 underline '><Link href='#'><FaInstagram size={30} /></Link></p>
</div>


</div>






</div>



    )

}
