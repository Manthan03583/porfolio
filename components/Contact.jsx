import { assets } from '@/public/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from 'motion/react'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key","3d20207c-6923-4e7a-9a5f-77c012e0e5fe");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <motion.div 
        initial={{ opacity: 0}}
        whileInView={{ opacity: 1}}
        transition={{duration: 1}}
        id='contact' className='w-full px-[12%] py-10 scroll-mt-20 bg-[url("/footer-bg-color.png")]
        bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
        
        <motion.h4 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.3, delay:0.5}}
            className='text-center mb-2 text-lg font-Ovo'>
            Connect With me
        </motion.h4>
        
        <motion.h2 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay:0.5}}
            className='text-center text-5xl font-Ovo'>
            Get in touch
        </motion.h2>

        <motion.p 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.7, delay:0.5}}
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'd love to hear from you! If you have any questions, comments, or feedback, please use the form below.
        </motion.p>

        <motion.form 
            initial={{ opacity: 0}}
            whileInView={{ opacity: 1}}
            transition={{duration: 0.9, delay:0.5}}
            onSubmit={onSubmit} className='max-w-2xl mx-auto'>
            <div className='grid grid-cols-auto gap-6 mt-10 mb-8'>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <motion.input 
                    initial={{x: -50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1.1, delay:0.6}}
                    type="text" placeholder='Enter your name' required
                    className='flex-1 p-3 outline-none border-[0.5px] border-secondaryText/30 rounded-md bg-lightBackground
                    dark:bg-darkHover/30 dark:border-primaryText/90'
                    name='name' id="name"/>

                <label htmlFor="email" className="sr-only">Your Email</label>
                <motion.input 
                    initial={{x: 50, opacity: 0}}
                    whileInView={{x: 0, opacity: 1}}
                    transition={{duration: 1.1, delay:0.6}}
                    type="email" placeholder='Enter your email' required
                    className='flex-1 p-3 outline-none border-[0.5px] border-secondaryText/30 rounded-md bg-lightBackground
                    dark:bg-darkHover/30 dark:border-primaryText/90'
                    name='email' id="email"/>
            </div>
            <label htmlFor="message" className="sr-only">Your Message</label>
            <motion.textarea 
                initial={{y: 100, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 1.3, delay:0.6}}
                rows='6' placeholder='Enter your message' required
                className='w-full p-4 outline-none border-[0.5px] border-secondaryText/30 rounded-md bg-lightBackground mb-6
                dark:bg-darkHover/30 dark:border-primaryText/90'
                name='message' id="message"></motion.textarea>

            <motion.button 
                whileHover={{scale: 0.05}}
                transition={{duration: 0.3}}
                type='submit'
                className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-secondaryText/80 text-primaryText 
                rounded-full mx-auto hover:bg-secondaryText duration-500 dark:bg-transparent dark:border-[0.5px] 
                dark:hover:bg-darkHover'
                aria-label="Submit contact form">
            Submit now <Image src={assets.right_arrow_white} alt='Send icon' className='w-4'/></motion.button>

            <p className='mt-4'>{result}</p>
        </motion.form>
    </motion.div>
  )
}

export default Contact