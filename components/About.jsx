import { assets, infoList, toolsData, aboutData } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1}}
      >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
          initial={{opacity: 0, y:-20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.3}}>
            Introduction  
        </motion.h4>

        <motion.h2 className='text-center text-5xl font-Ovo'
           initial={{opacity: 0, y:-20}}
           whileInView={{opacity: 1, y: 0}}
           transition={{duration: 0.5, delay: 0.5}}
        >
          About me
        </motion.h2>

        <motion.div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'
           initial={{opacity: 0}}
           whileInView={{opacity: 1}}
           transition={{duration: 0.8}}
        >
          <motion.div className='w-64 sm:w-80 rounded-3xl max-w-none'
             initial={{opacity: 0, scale: 0.9}}
             whileInView={{opacity: 1, scale: 1}}
             transition={{duration: 0.6}}  
          >
            <Image src={assets.user_image} alt='Manthan Moharana' className='w-full rounded-3xl'/>
          </motion.div>
          
          <motion.div className='flex-1'
             initial={{opacity: 0}}
             whileInView={{opacity: 1}}
             transition={{duration: 0.6, delay: 0.8}}
          >
            <p className='mb-10 max-w-2xl font-Ovo'>
              {aboutData.introParagraph}
            </p>

            <motion.ul className='grid grid-cols-3 sm:grid-cols-3 gap-6 max-w-2xl'
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 0.8, delay: 1}}
            >
              {infoList.map(({icon, iconDark, title, description},index) => (
                <motion.li
                  whileHover={{scale: 1.05}}
                  className='border-[0.5px] border-secondaryText/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover
                  hover:-translate-y-1 duration-500 hover:shadow-secondaryText dark:border-primaryText/30 dark:hover:shadow-primaryText dark:hover:bg-darkHover/50' 
                  key={index}                
                >
                  <Image src={ isDarkMode? iconDark : icon} alt={title} className='w-7 mt-3'/>
                  <h3 className='my-4 font-semibold text-secondaryText dark:text-primaryText'>{title}</h3>
                  <p className='text-secondaryText/80 text-sm dark:text-primaryText/80'>{description}</p>
                </motion.li>
              ))}
            </motion.ul>

            <motion.h4 
              initial={{y:20, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{delay: 1.3, duration: 0.5}}
              className='my-6 text-secondaryText font-Ovo dark:text-primaryText/80'
            >
              Tools I use
            </motion.h4>
            
            <motion.ul 
              initial={{y:20, opacity: 0}}
              whileInView={{y:0, opacity: 1}}
              transition={{delay: 1.3, duration: 0.5}}
              className='flex items-center gap-3 sm:gap-5'>
              {toolsData.map((tool, index)=>(
                <motion.li 
                  whileHover={{scale:1.1}}
                  className='flex items-center justify-center w-12 sm:w-14 aspect-square border
                 border-secondaryText/30 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                  <Image src={tool} alt='Tool icon' className='w-5 sm:w-7'/>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About