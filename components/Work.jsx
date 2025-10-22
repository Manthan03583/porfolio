import { assets, workData } from '@/public/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import {motion} from 'motion/react'

const Work = ({isDarkMode}) => {
    const [selectedProject, setSelectedProject] = useState(null)

    const handleProjectClick = (project) => {
        setSelectedProject(project)
    }

    const handleCloseOverlay = () => {
        setSelectedProject(null)
    }

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1}}
            transition={{ duration: 1}}
            id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            
            <motion.h4 
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.3, delay:0.5}}
                className='text-center mb-2 text-lg font-Ovo'>
                My Portfolio</motion.h4>
            
            <motion.h2
                initial={{y: -20, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.5, delay:0.5}}
                className='text-center text-5xl font-Ovo'>
                My latest work</motion.h2>

            <motion.p 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.7, delay:0.5}}
                className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my software development portfolio! Explore a correction of projects showing my expertise in software development
            </motion.p>

            <motion.div 
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{duration: 0.9, delay:0.6}}
                className='grid grid-cols-auto my-10 gap-5 dark:text-secondaryText '>
                {workData.map((project, index) => (
                    <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                        key={index} style={{backgroundImage: `url(${project.bgImage})`}}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group'
                        onClick={() => handleProjectClick(project)}>
                        <div className='bg-lightBackground w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2
                         py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold'>{project.title}</h2>
                                <p className='text-sm text-secondaryText'>{project.description}</p>
                            </div>
                            <div className='flex flex-row'>
                                <div className='border rounded-full border-secondaryText w-9 aspect-square flex items-center 
                                justify-center shadow-custom-shadow group-hover:bg-accent/50 transition'>
                                    
                                    <a href={project.project_link} aria-label={`View live project: ${project.title}`} onClick={(e) => e.stopPropagation()}>
                                        <Image src={assets.send_icon} alt='deployed icon' className='w-5'/>
                                    </a>
                                </div>

                                <div className='border rounded-full border-secondaryText w-9 aspect-square flex items-center 
                                justify-center shadow-custom-shadow group-hover:bg-accent/50 transition'>
                                    
                                    <a href={project.github_link} aria-label={`View GitHub repository for ${project.title}`} onClick={(e) => e.stopPropagation()}>
                                        <Image src={assets.github_icon} alt='github icon' className='w-5'/>
                                    </a>
                                </div>
                            </div>                        
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {selectedProject && (
                <div className='fixed inset-0 bg-darkBackground bg-opacity-75 flex items-center justify-center z-50 p-4'>
                    <div className='bg-lightBackground dark:bg-darkBackground p-8 rounded-lg max-w-3xl max-h-[90vh] overflow-y-auto relative'>
                        <button onClick={handleCloseOverlay} className='absolute top-4 right-4 text-secondaryText/80 dark:text-primaryText text-2xl'>&times;</button>
                        <h2 className='text-3xl font-Ovo mb-4'>{selectedProject.title}</h2>
                        <p className='text-secondaryText dark:text-primaryText/80 mb-4'>{selectedProject.longDescription}</p>
                        <div className='flex gap-4'>
                            {selectedProject.project_link && (
                                <a href={selectedProject.project_link} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-accent text-primaryText rounded-full'>View Live Project</a>
                            )}
                            {selectedProject.github_link && (
                                <a href={selectedProject.github_link} target='_blank' rel='noopener noreferrer' className='px-4 py-2 bg-secondaryText text-primaryText rounded-full'>GitHub Repo</a>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Conditional rendering for the 'Show more' link */}
            {/* Assuming that if href is an empty string, the link should not be rendered. */}
            {/* If a functional 'Show more' link is desired, update the href attribute. */}
            {'' && (
                <motion.a 
                    initial={{ opacity: 0}}
                    whileInView={{ opacity: 1}}
                    transition={{duration: 1.1, delay:0.5}}
                    href='' className='w-max flex items-center justify-center gap-2 text-secondaryText border-[0.5px]
                    border-secondaryText rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 
                    dark:text-primaryText dark:border-primaryText dark:hover:bg-darkHover'>
                    Show more 
                    <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
                </motion.a>
            )}
        </motion.div>
    )
}

export default Work