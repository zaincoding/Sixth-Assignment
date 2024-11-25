
import Image from 'next/image'
import Link from 'next/link'
import {FaLinkedin, FaTwitter,FaDribbble } from "react-icons/fa";
import MySection from '@/components/Sections/Body/body'

export default function Hero(){

    return(

    <div>
        <div className=" h-[780px] md:w-full md:h-[800px]  md:flex flex-col">
<div className='md:flex md:flex-row justify-between'>
            <div className="w-[380] h-[174] space-y-[24px]   mx-5
               md:h-[500] md:w-1/2 md:my-[300px]  md:px-[250px]">
                <h1 className="w-[410px] h-[96px]
                text-[40px] font-bold  text-[#000000] md:leading-[68px] md:text-[56px]
                " style={{fontFamily: 'Roboto'}}><span className='block'>Learn new skills</span> <span className='bock'>online with ease</span></h1>


                <p className='w-[380px] h-[54px] text-[18px] font-normal leading-[27px] md:w-[500px] md:h-[54px] md:py-8 md:relative'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
         
                <div className='w-[358px]  h-[64px]  space-x-4 md:py-8'>
                    
                        <button className="bg-black text-white rounded-[5px] w-[176px] h-[48px] border-[1px]
                        ">Start Learning</button>
                        <button className="border-[1px] w-[164px] h-[48px] rounded-[5px] border-[#000000]">Explore Courses</button>

                    
                </div>

           
           </div> 

           <div   className='md:w-1/2'>    
           <Image src='/images/image.PNG' alt='main-image' width={428}   height={200}  
           className='md:w-full  md:relative'/> 
</div>
</div>
<div className='w-[428px] h-[239px] bg-[#ffffff] md:hidden'>
  <div className='w-[327px] text-[18px] font-bold leading-[27px]' style={{ fontFamily: 'Roboto' }}>
    <p>Trusted by the world&apos;s best companies social proof to build credibility</p>
  </div>

  <div>
    <Image src='/images/CoLogs.PNG' alt='LogCo' width={1367} height={65.6} />
  </div>
</div>

{/* Company logos */}
<div  className='md:w-full md:h-[228px]  md:flex justify-between hidden'>
<div className='w-1/4'>
  <p className='md:text-[22px] font-bold' style={{fontFamily: 'Roboto'}}><span className='block'>Trusted by 200+ companies</span> worldwide</p>

  </div>

   <div className=' md:flex flex-row space-x-28 hidden'>
    <Image src='/images/CoLogos/logo1/Airbnb-Logo.PNG' alt='Company Logo1' width={123.8} height={38.52}/>
    <Image src='/images/CoLogos/logo2/Airbnb Logo.PNG' alt='Company Logo2' width={123.8} height={38.52}/>
    <Image src='/images/CoLogos/logo3/Airbnb Logo.PNG' alt='Company Logo3' width={123.8} height={38.52}/>
    <Image src='/images/CoLogos/logo4/Airbnb Logo.PNG' alt='Company Logo4' width={123.8} height={38.52}/>
    <Image src='/images/CoLogos/logo5/Airbnb Logo.PNG' alt='Company Logo5' width={123.8} height={38.52}/>
    <Image src='/images/CoLogos/logo6/Airbnb Logo.PNG' alt='Company Logo6' width={123.8} height={38.52}/>


   </div>

</div>
   
{/* 
 //Course Category section    */}
<div  className="w-[428px]  h-[862px] flex flex-col justify-between items-center bg-gray-100 md:w-full">

<div>
             <div className='w-[385px] bg-gray-100 h-[84px] font-bold text-[32px] leading-[41.6px] text-center md:w-full'
              style={{fontFamily: 'Roboto'}} >
                <h1>Explore Courses By Category</h1>
             </div>
<div className='text-[18px] text-center h-[120px]'>
<p>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
</div>
<div  className='w-[380]  rounded-[5px] bg-gray-100 space-y-5 md:space-y-0 md:space-x-[320px]  text-center  md:flex md:flex-row md:w-full md:justify-between'>

  <div className='h-[132] bg-gray-200 flex flex-row space-y-4 items-center 
  justify-between hover:bg-gray-300'>
<div  className='mx-4'>
  <Image src='/images/icons/courses/icon1.PNG' alt='icon1' width={50} height={20} />
</div>

<div className='mx-[60px]'>
   <h1>
    <span className='block'>Design & development</span> 50+ Courses Available</h1>
   </div>

</div>




<div className='h-[132] bg-gray-200 flex flex-row space-y-4 items-center 
  justify-between hover:bg-gray-300'>
<div  className='mx-4'>
  <Image src='/images/icons/courses/icon2.PNG' alt='icon2' width={50} height={20} />
</div>

<div className='mx-[60px]'>
   <h1>
    <span className='block'>Marketing</span> 50+ Courses Available</h1>
   </div>

</div>



<div className='h-[132] bg-gray-200 flex flex-row space-y-4 items-center 
  justify-between hover:bg-gray-300'>
<div  className='mx-4'>
  <Image src='/images/icons/courses/icon3.PNG' alt='icon3' width={50} height={20} />
</div>

<div className='mx-[60px]'>
   <h1>
    <span className='block'>Development</span> 50+ Courses Available</h1>
   </div>

</div>


{/* //second row */}





 <div  className='md:hidden'>
   <button  className='border-[1px] border-[#000000] w-[155px] h-[48px] rounded-[5px]'>View All Courses</button>
</div>

</div> 

{/* //Second row */}

<div  className=' hidden w-[380]  rounded-[5px] bg-gray-100 my-[100px] md:space-y-0 md:space-x-[320px]  text-center  md:flex md:flex-row md:w-full md:justify-between'>

<div className='h-[132] bg-gray-200 flex flex-row space-y-4 items-center 
  justify-between hover:bg-gray-300'>
<div  className='mx-4'>
  <Image src='/images/icons/courses/icon4.PNG' alt='icon1' width={50} height={20} />
</div>

<div className='mx-[60px]'>
   <h1>
    <span className='block'>Design & development</span> 50+ Courses Available</h1>
   </div>

</div>


<div className='h-[132] bg-gray-200 flex flex-row space-y-4 items-center 
  justify-between hover:bg-gray-300'>
<div  className='mx-4'>
  <Image src='/images/icons/courses/icon5.PNG' alt='icon1' width={50} height={20} />
</div>

<div className='mx-[60px]'>
   <h1>
    <span className='block'>Design & development</span> 50+ Courses Available</h1>
   </div>

</div>


<div className='h-[132] bg-gray-200 flex flex-row space-y-4 items-center 
  justify-between hover:bg-gray-300'>
<div  className='mx-4'>
  <Image src='/images/icons/courses/icon6.PNG' alt='icon1' width={50} height={20} />
</div>

<div className='mx-[60px]'>
   <h1>
    <span className='block'>Design & development</span> 50+ Courses Available</h1>
   </div>

</div>
</div>


{/* 
//Third row */}
<div  className='hidden w-[380]  rounded-[5px] bg-gray-100 my-[100px] md:space-y-0 md:space-x-[320px]  text-center  md:flex md:flex-row md:w-full md:justify-between'>

<div className='h-[132] bg-gray-200 flex flex-row space-y-4 items-center 
  justify-between hover:bg-gray-300'>
<div  className='mx-4'>
  <Image src='/images/icons/courses/icon7.PNG' alt='icon1' width={50} height={20} />
</div>

<div className='mx-[60px]'>
   <h1>
    <span className='block'>Design & development</span> 50+ Courses Available</h1>
   </div>

</div>


<div className='h-[132] bg-gray-200 flex flex-row space-y-4 items-center 
  justify-between hover:bg-gray-300'>
<div  className='mx-4'>
  <Image src='/images/icons/courses/icon8.PNG' alt='icon1' width={50} height={20} />
</div>

<div className='mx-[60px]'>
   <h1>
    <span className='block'>Design & development</span> 50+ Courses Available</h1>
   </div>

</div>


<div className='h-[132] bg-gray-200 flex flex-row space-y-4 items-center 
  justify-between hover:bg-gray-300'>
<div  className='mx-4'>
  <Image src='/images/icons/courses/icon9.PNG' alt='icon1' width={50} height={20} />
</div>

<div className='mx-[60px]'>
   <h1>
    <span className='block'>Design & development</span> 50+ Courses Available</h1>
   </div>

</div>
</div>


 <div className='flex-row justify-items-end items-center mx-[800px] hidden md:block'>
   <button  className='border-[1px] border-[#000000] w-[155px] h-[48px] rounded-[5px]'>View All Courses</button>
</div>


{/* //Achivement Section */}
<div  className='my-6 w-[385px] h-[264px] bg-gray-100  text-center md:w-full'>


<div  className='bg-gray-100 '>
<div className=' font-bold  md:text-[48px]  text-[32px] leading-[41.6px]'
              style={{fontFamily: 'Roboto'}} >
                <h1>Our Achivements</h1>
             </div>


          
<div className='text-[18px] text-center font-normal leading-[27px] md:h-[54px] my-[20px]'>
<p className='md:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
<p  className='hidden md:block'><span className='block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra</span> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
</div>
</div>


  <div className='md:hidden space-y-[50px]' >
<div  className='flex  space-x-2'>
       <div className=' border-[#000000] border-[1px] w-[182px]'><span className='block font-bold text-[40px] ' style={{fontFamily: 'Roboto'}}>+200</span> <span>Courses</span></div>
       <div className=' border-[#000000] border-[1px] w-[182px] '><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>50k</span> <span>Mentors</span></div>       
</div>

<div className='md:hidden flex space-x-2'>
       <div className=' border-[#000000] border-[1px] w-[182px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>370k</span> <span>Students</span></div>
       <div className=' border-[#000000] border-[1px] w-[182px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>100+</span> <span>Recognition</span></div>
</div>
</div>

{/* 
//md screen size */}
<div className='hidden md:block'>
<div  className='flex flex-row  justify-between my-[30px] space-x-4'>

       <div className=' border-[#000000] border-[1px] w-[269px] h-[85px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>+200</span> <span>Courses</span></div>
       <div className=' border-[#000000] border-[1px] w-[269px] h-[85px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>50k</span> <span>Mentors</span></div>       

       <div className=' border-[#000000] border-[1px] w-[269px] h-[85px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>370k</span> <span>Students</span></div>
       <div className=' border-[#000000] border-[1px] w-[269px] h-[85px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>100+</span> <span>Recognition</span></div>

</div>
</div>



{/* //Our Achivement */}


{/* //Achivement Section */}
<div  className='my-[120px] w-[385px] h-[264px] bg-gray-100  text-center md:w-full '>


<div  className='bg-gray-100 '>
<div className=' font-bold  md:text-[48px]  text-[32px] leading-[41.6px]'
              style={{fontFamily: 'Roboto'}} >
                <h1>Our Achivements</h1>
             </div>


          
<div className='text-[18px] text-center font-normal leading-[27px] md:h-[54px] my-[20px]'>
<p className='md:hidden'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
<p  className='hidden md:block'><span className='block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra</span> ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
</div>
</div>
<div className='md:hidden space-y-[50px]' >
<div  className='flex  space-x-2'>
       <div className=' border-[#000000] border-[1px] w-[182px] '><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>+200</span> <span>Courses</span></div>
       <div className=' border-[#000000] border-[1px] w-[182px] '><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>50k</span> <span>Mentors</span></div>       
</div>

<div className='md:hidden flex space-x-2'>
       <div className=' border-[#000000] border-[1px] w-[182px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>370k</span> <span>Students</span></div>
       <div className=' border-[#000000] border-[1px] w-[182px]'><span className='block font-bold text-[40px] ' style={{fontFamily: 'Roboto'}}>100+</span> <span>Recognition</span></div>
</div>
</div>

{/* 
//md screen size */}
<div className='hidden md:block'>
<div  className='flex flex-row  justify-between my-[30px] space-x-4'>

       <div className=' border-[#000000] border-[1px] w-[269px] h-[85px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>+200</span> <span>Courses</span></div>
       <div className=' border-[#000000] border-[1px] w-[269px] h-[85px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>50k</span> <span>Mentors</span></div>       

       <div className=' border-[#000000] border-[1px] w-[269px] h-[85px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>370k</span> <span>Students</span></div>
       <div className=' border-[#000000] border-[1px] w-[269px] h-[85px]'><span className='block font-bold text-[40px]' style={{fontFamily: 'Roboto'}}>100+</span> <span>Recognition</span></div>

</div>
</div>
</div>


{/* 
//End Achivement */}





{/* //Our Courses Section */}


<div  className='my-[120px] w-[385px] h-[264px] bg-gray-100  text-center md:w-full '>


<div  className=' my-[100px]'>
<div className=' font-bold  md:text-[48px]  text-[32px] leading-[41.6px]'
              style={{fontFamily: 'Roboto'}} >
                <h1>Our Courses</h1>
             </div>


          
<div className='text-[18px] text-center font-normal leading-[27px] md:h-[54px] my-[20px]'>
   <p>Your Ultimate Guide to learning</p>

   <div className='justify-between space-x-3 my-[30px]'>
         <Link href='#' className='border-[1px] border-[#1a0e0e] p-1'>Popular</Link>
         <Link href='#' className='border-[1px] border-[#1a0e0e] p-1'>Recomended</Link>
         <Link href='#' className='border-[1px] border-[#1a0e0e] p-1'>BestPractice</Link>
   </div>
</div>

{/* Course Bosex */}

<div  className='gird grid-col-1 md:grid grid-cols-3 gap-4 my-[100px]'>
     <div className='text-left border rounded-[5px] hover:bg-gray-300'>
      <Image src='/images/courses-img/Image1.PNG' alt='Course-Image' width={380} height={300} className='md:w-[580px] md:h-[480px]' />
     
    <p className='mt-2'> Design</p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>UX/UI Design 201</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

    <p><button  className='border-[#a8a3a3] border-[1px] p-2 rounded-[5px] my-[14px]'>Enroll now</button>
     
     <span className='mx-5'>$400</span>
    </p>
    </div>

    <div className='text-left border rounded-[5px] hover:bg-gray-300'>
      <Image src='/images/courses-img/Image2.PNG' alt='Course-Image' width={380} height={300}  className='md:w-[580px] md:h-[480px]' 
      />
     
    <p className='mt-2'> Programming</p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Introduction to Python</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros..</p>

    <p><button  className='border-[#a8a3a3] border-[1px] p-2 rounded-[5px] my-[14px]'>Enroll now</button>
     
     <span className='mx-5'>$400</span>
    </p>
    </div>

    <div className='text-left border rounded-[5px] hover:bg-gray-300'>
      <Image src='/images/courses-img/Image3.PNG' alt='Course-Image' width={380} height={300}  className='md:w-[580px] md:h-[480px]'/>
     
    <p className='mt-2'> Businesses</p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Data Analysis for Beginners</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

    <p><button  className='border-[#a8a3a3] border-[1px] p-2 rounded-[5px] my-[14px]'>Enroll now</button>
     
     <span className='mx-5'>$400</span>
    </p>
    </div>
</div>
    {/* //Courses Section -2 */}


    <div  className='gird grid-col-1 md:grid grid-cols-3 gap-4 my-[100px]'>

    <div className='text-left border rounded-[5px] hover:bg-gray-300 '>
      <Image src='/images/courses-img/Image4.PNG' alt='Course-Image' width={380} height={300} className='md:w-[580px] md:h-[480px]' />
     
    <p className='mt-2'> Design</p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Art</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

    <p><button  className='border-[#a8a3a3] border-[1px] p-2 rounded-[5px] my-[14px]'>Enroll now</button>
     
     <span className='mx-5'>$400</span>
    </p>
    </div>

    <div className='text-left border rounded-[5px] hover:bg-gray-300 '>
      <Image src='/images/courses-img/Image5.PNG' alt='Course-Image' width={380} height={300}  className='md:w-[580px] md:h-[480px]' 
      />
     
    <p className='mt-2'> Programming</p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Introduction to Python</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros..</p>

    <p><button  className='border-[#a8a3a3] border-[1px] p-2 rounded-[5px] my-[14px]'>Enroll now</button>
     
     <span className='mx-5'>$400</span>
    </p>
    </div>

    <div className='text-left border rounded-[5px] hover:bg-gray-200 '>
      <Image src='/images/courses-img/Image6.PNG' alt='Course-Image' width={380} height={300}  className='md:w-[580px] md:h-[480px]'/>
     
    <p className='mt-2'> Businesses</p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Data Analysis for Beginners</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>

    <p><button  className='border-[#a8a3a3] border-[1px] p-2 rounded-[5px] my-[14px]'>Enroll now</button>
     
     <span className='mx-5'>$400</span>
    </p>
    </div>



{/* 
//End Courses Section -2 */}

</div>
<p><button  className='border-[#a8a3a3] border-[1px] p-2 rounded-[5px] '>View All Courses</button>
     

    </p>

{/* 
//course boxes end */}

{/* //Our Team Start */}

{/* <div>
     <Image src='/images/OurTeam/Image.PNG' alt='team-image' width={100} height={80}/>
</div> */}


<div  className=' my-[100px]  bg-gray-200'>
<div className=' font-bold  md:text-[48px]  text-[32px] leading-[41.6px]'
              style={{fontFamily: 'Roboto'}} >
                <h1>Our Courses</h1>
             </div>


          
<div className='text-[18px] text-center font-normal leading-[27px] md:h-[54px] my-[20px]'>
   <p>Your Ultimate Guide to learning</p>
</div>


<div  className='gird grid-col-1 md:grid grid-cols-3 gap-4 my-[100px] justify-items-center'>
     <div className='text-left border rounded-[5px] hover:bg-gray-300 '>
     <Image src='/images/OurTeam/Image1.PNG' alt='team-image' width={100} height={80}  className='mx-[30px]'/>
     
    <p className='mt-2'></p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>James Nduku1</h1>
    <p>Marketing Coordinator.</p>
    <div className="flex space-x-6  my-5">
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            <FaDribbble size={24} />
          </div>

    </div>


     <div className='text-left border rounded-[5px] hover:bg-gray-300 '>
     <Image src='/images/OurTeam/Image2.PNG' alt='team-image' width={100} height={80} className='mx-[30px]'/>
     
    <p className='mt-2'></p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Joseph Munyambu</h1>
    <p>Nursing Assistant</p>
    <div className="flex space-x-6  my-5">
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            <FaDribbble size={24} />
          </div>

    </div>



     <div className='text-left border rounded-[5px] hover:bg-gray-300 '>
     <Image src='/images/OurTeam/Image3.PNG' alt='team-image' width={100} height={80}  className='mx-[30px]'/>
     
    <p className='mt-2'></p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Joseph Ngumbau</h1>
    <p>Medical Assistant</p>
    <div className="flex space-x-6  my-5">
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            <FaDribbble size={24} />
          </div>

    </div>

</div>
    {/* //Tean Section -2 */}


    <div  className='gird grid-col-1 md:grid grid-cols-3 gap-4 my-[100px] justify-items-center hidden'>
     <div className='text-left border rounded-[5px] hover:bg-gray-300  '>
     <Image src='/images/OurTeam/Image4.PNG' alt='team-image' width={100} height={80}  className='mx-[30px]'/>
     
    <p className='mt-2'></p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Erick Kipkemboi</h1>
    <p>Web Designer</p>
    <div className="flex space-x-6  my-5">
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            <FaDribbble size={24} />
          </div>

    </div>


     <div className='text-left border rounded-[5px] hover:bg-gray-300 '>
     <Image src='/images/OurTeam/Image5.PNG' alt='team-image' width={100} height={80} className='mx-[30px]'/>
     
    <p className='mt-2'></p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>Stephen Kerubo</h1>
    <p>President of Sales</p>
    <div className="flex space-x-6  my-5">
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            <FaDribbble size={24} />
          </div>

    </div>



     <div className='text-left border rounded-[5px] hover:bg-gray-300 '>
     <Image src='/images/OurTeam/Image6.PNG' alt='team-image' width={100} height={80}  className='mx-[30px]'/>
     
    <p className='mt-2'></p>
    <h1 className='my-[10px] text-[24px] font-bold' style={{fontFamily: 'Roboto'}}>John Leboo</h1>
    <p>Dog Trainer</p>
    <div className="flex space-x-6  my-5">
            <FaTwitter size={24} />
            <FaLinkedin size={24} />
            <FaDribbble size={24} />
          </div>

    </div>

</div>
</div>



{/* //Our Team End */}





{/* //Customer Commercial */}

<div  className='text-left  justify-between md:space-x-[100px] space-x-[50px] bg-slate-100'>

<h1 className='text-[48px] font-bold md:ml-[90px] ml-[50px]'>Customer testimonials</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
<div className='flex space-x-[200px]'>
<div className='w-[362] h[321] border-[#000] border-[1px] justify-center hover:bg-gray-200'>
  <Image src='/images/vst/Image.PNG' alt='Vector' width={116} height={18.89}  className='my-[20px]'/>
  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
  
  <div className='relative my-[20px]'>
  <p className='mx-[130px] w-[200px]  my-[20px] absolute'>James Nduku   <span className='block'>Software Developer</span></p>   
   <Image src='/images/OurTeam/Image3.PNG' alt='team-image' width={100} height={80}  className='mx-[10px] rounded-full'/>
  </div>

  </div>


<div className='w-[362] h[321] border-[#000] border-[1px] hidden md:block hover:bg-gray-200'>
<Image src='/images/vst/Image.PNG' alt='Vector' width={116} height={18.89} className='my-[20px]' />
  &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;

  <div className='relative my-[20px]'>
<p  className='w-[150px] mx-[150px] my-[20px] absolute'> Erick Kipkemboi <p>Scrum Master</p></p>
 <Image src='/images/OurTeam/Image1.PNG' alt='team-image' width={100} height={80}  className='mx-[30px] rounded-full'/>

  </div>
  </div>

<div className='w-[362] h[321] border-[#000] border-[1px] hidden md:block hover:bg-gray-200'>
<Image src='/images/vst/Image.PNG' alt='Vector' width={116} height={18.89} className='my-[30px]'/>
&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;

<div className='relative my-[20]'>

<p className='mx-[150px] w-[200px] my-[10px] absolute'> Stephen Kerubo <p>UI/UX Designer</p></p>
<Image src='/images/OurTeam/Image6.PNG' alt='team-image' width={100} height={80}  className='mx-[30px] rounded-full'/>

  </div>
  </div>


</div>

</div>


{/* //Customer Commercial End*/}



{/* //Buttons Start*/}

<div>
  <MySection/>
</div>

{/* 
//Buttons End */}

</div>
</div>



{/* //End Courses Section */}


</div>



</div>


 </div>

            </div>            

<div>
    
</div>
</div>


    )
}


