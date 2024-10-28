import React from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <div className='bg-black pt-20 w-full h-full min-h-[600px] flex justify-center gap-20 items-center flex-col'>
            <h1 className='text-5xl text-white font-semibold'>Get in touch</h1>
            <div className='flex justify-center items-center'>
                <form className='flex justify-center items-center flex-col gap-8 w-[300px] md:w-[550px]'>
                    <div className='flex justify-center items-center flex-col relative w-full select-none'>
                        <label
                            htmlFor='email'
                            className='absolute left-2 top-2 text-gray-400 transition-transform duration-300 transform origin-left scale-100'
                        >
                            Enter your email
                        </label>
                        <input
                            type='email'
                            id='email'
                            className='text-sm text-white w-full py-4 pl-2 pr-10 border-b-2 outline-none border-gray-600 bg-black placeholder-transparent focus:outline-none'
                            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                            placeholder=' ' // Keep a space for the placeholder to work
                            onFocus={(e) => e.target.previousSibling.classList.add('translate-y-[-20px]', 'text-xs')}
                            onBlur={(e) => {
                                if (!e.target.value) {
                                    e.target.previousSibling.classList.remove('translate-y-[-20px]', 'text-xs');
                                }
                            }}
                        />
                    </div>
                    <div>
                        <button type='submit' className='bg-gradient-to-r from-violet-500 to-fuchsia-300 text-white px-10 py-3 rounded-full'>Send</button>
                    </div>
                </form>
            </div>
            <div className='w-11/12 h-24 mt-auto flex justify-center items-center'>
                <div className='bg-gradient-to-l from-violet-500 to-fuchsia-300 bg-clip-text text-transparent text-3xl w-1/3 font-bold'>
                    ELIXR
                </div>
                <div className='flex justify-around items-center w-1/3'>
                    {
                        ['About', 'Team', 'Contact'].map((item, index) => (
                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1 }}
                                className='text-white text-lg' key={index}>{item}</motion.p>
                        ))
                    }
                </div>
                <div className='w-1/3 flex justify-end gap-3 items-center'>
                    <div className='w-fit h-fit p-1 bg-white rounded-md hover:cursor-pointer'>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-500 transition-all" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className='w-fit h-fit p-1 bg-white rounded-md hover:cursor-pointer'>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white hover:text-pink-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    <div className='w-fit h-fit p-1 bg-white rounded-md hover:cursor-pointer'>
                        <svg class="w-6 h-6 text-gray-800 dark:text-white hover:text-blue-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                            <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}
