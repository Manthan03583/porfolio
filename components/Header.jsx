import { assets, headerData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-16'>
        <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration:0.8, type:'spring', stifness:100}}>
            <Image src={assets.profile_img} alt='Manthan Moharana' className='rounded-full w-32' />
        </motion.div>
        <motion.h3
             initial={{y: -20, opacity: 0}}
             whileInView={{y: 0, opacity: 1}}
             transition={{duration: 0.6, delay:0.3}}
            className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                {headerData.introText} 
                <Image src={assets.hand_icon} alt='Waving hand' className='w-6'/>
        </motion.h3>
        
        <motion.h1 
            initial={{y: -30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay:0.5}}
            className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Software Developer based in Bhubaneswar, Odisha, India
        </motion.h1>

        <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay:0.7}}
            className='max-w-2xl mx-auto font-Ovo'>
            {headerData.descriptionText}
        </motion.p>

        <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
            <motion.a
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay:1}} 
                href="#contact" className='px-10 py-3 border border-secondaryText rounded-full bg-secondaryText text-primaryText 
                flex items-center gap-2 dark:bg-transparent dark:border-primaryText' aria-label="Contact me">
                    contact me <Image src={assets.right_arrow_white} alt='Right arrow' className='w-4'/> 
            </motion.a>
            <motion.a 
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay:1.2}} 
                href={assets.resume} target="_blank" rel="noopener noreferrer"
                className='px-10 py-3 border rounded-full border-secondaryText/50 flex 
                items-center gap-2 bg-lightBackground dark:text-secondaryText dark:border-primaryText/50' aria-label="View my resume">
                    view resume <Image src={assets.arrow_icon} alt='Arrow icon' className='w-4'/> 
            </motion.a>
        </div>

    </div>
  )
}

export default Header
