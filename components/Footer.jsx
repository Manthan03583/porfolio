import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='Manthan Moharana Logo' className='w-36 mx-auto mb-2'/>
            
            <div className='w-max flex items-center gap-2 mx-auto'>
                <Image src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt='Email icon' className='w-6'/>
                <a href="mailto:manthanmoharana03583@gmail.com">manthanmoharana03583@gmail.com</a>
            </div>
        </div>
        <div className='text-center sm:flex items-center justify-between border-t border-secondaryText/30 
        mt-12 py-6'>
            <p className='text-secondaryText dark:text-primaryText'>@ 2025 Manthan Moharana. All rights reserved</p>
            <ul className='flex item-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/Manthan03583">GitHub</a></li>
                <li><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/manthanmoharana">LinkedIn</a></li>
            </ul>
        </div>

    </div>
  )
}

export default Footer