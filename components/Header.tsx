import React from 'react';
import Image from 'next/image';

function Header() {
  return (
    <div className='hidden sm:flex w-full h-[54px] mx-auto px-4 items-center bg-secondary overflow-x-hidden'>
    <div className='flex w-full justify-between items-center'>
      <div className='flex items-center gap-4'>
    <span className='text-sm sm:text-base font-roboto'>
      Phone Number: 956 742 455678
      </span>
     <div className='h-5 w-px bg-[#676767]'></div>
    <span className='text-sm sm:text-base font-roboto'>Email: info@ddsgnr.com</span>
    </div>

    <div className='flex gap-4 items-center'>
          <Image src="/icons/facebook.svg" 
          alt ="facebook"
          width={14}
          height={18}
           className='hover:opacity-80'></Image>
        

       
          <Image src ="/icons/instagram.svg"
          alt ="instagram"
          width={24}
          height={18}
          className='hover:opacity-80'>
          </Image>
          
          
          
          <Image src="/icons/twitter.svg"
          alt ="twitter"
          width={24}
          height={24}
           className='hover: opacity-80'>
          </Image>
      
          <Image src="/icons/linkedin.svg"
           alt ="linkedIn" 
           width={20}
           height={20}
           className= "hover: opacity-80"/>
       
    </div> 
    </div>
    </div>
  )
}

export default Header