'use client'
import React, { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import { members } from '@/lib/member.utils'
import { PlusCircleIcon } from 'lucide-react'
import { WobbleCard } from '@/components/ui/wobble-card'

export default function Page({ params }) {
    const props = members[params.slug]

    return (
        <div className='w-full h-full flex justify-center items-center flex-col'>
            <Navbar />
            <div className='w-full h-full bg-black flex justify-center md:p-20 items-center flex-col gap-4'>
                <div className="flex h-full w-full md:w-4/5 items-center justify-center gap-y-20 flex-col">
                    <div className='w-full h-full flex justify-center items-center flex-col mb-10'>
                        <img src={props.url} className='w-96 h-96 object-contain'></img>
                        <h2 className='text-md font-semibold text-white'>{props.name}</h2>
                        <p className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-300 text-lg'>{props.position}</p>
                    </div>
                </div>
                {
                    props.theme ?
                        (
                            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                                <WobbleCard containerClassName={'bg-black'} className='flex justify-start items-center relative flex-col w-full h-[300px] rounded-2xl bg-white'>
                                    <div className='flex justify-end items-center w-full h-fit p-5 absolute top-0 text-black'>
                                        <PlusCircleIcon className='size-9 transform rotate-45' />
                                    </div>
                                    <div className='w-full h-fit mt-auto p-5 text-white text-2xl'>
                                        <p className='font-semibold bg-clip-text text-transparent bg-gradient-to-b from-violet-500 to-fuchsia-300'>About {props.name.split(' ')[0]}.</p>
                                        <p className='text-black text-sm md:w-1/2 w-full font-semibold'>
                                            {props.description}
                                        </p>
                                    </div>
                                    <div className='hidden absolute w-1/5 h-[200px] bg-[#222428] rounded-xl text-white right-5 bottom-5 text-2xl md:flex justify-center items-center'>
                                        {`Jai's reel.`}
                                    </div>
                                </WobbleCard>
                            </motion.div>
                        )
                        : (
                            <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
                                <WobbleCard containerClassName={'bg-black'} className='flex justify-start items-center flex-col w-full h-[300px] rounded-2xl bg-gradient-to-b from-violet-500 to-fuchsia-300'>
                                    <div className='flex justify-end items-center w-full h-fit p-5 text-white'>
                                        <PlusCircleIcon className='size-9' />
                                    </div>
                                    <div className='w-full h-fit mt-auto p-5 text-white text-2xl'>
                                        <p className='font-semibold'>About {props.name.split(' ')[0]}.</p>
                                        <p className='text-white text-2xl md:w-1/2 w-full font-semibold'>
                                            {props.description}
                                        </p>
                                    </div>
                                </WobbleCard>
                            </motion.div>
                        )
                }
                <div className='flex justify-start items-center w-full h-[300px] gap-8'>
                    <motion.div className='w-full h-full' initial={{ opacity: 0, x: -100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <WobbleCard containerClassName={'h-full bg-black rounded-3xl'} className='w-full h-full bg-[#222428] rounded-3xl flex relative flex-col justify-center items-center'>
                            <p className='text-white text-2xl font-semibold'>LinkedIn Event</p>
                            <p className='text-4xl bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-300 font-bold'>11.09.23</p>
                            <button className='px-6 py-2 w-fit h-fit bg-white mt-3 text-black rounded-3xl'>Sign up</button>
                            <div className='w-fit h-fit p-1 bg-white rounded-md absolute bottom-3'>
                                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clipRule="evenodd" />
                                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                                </svg>
                            </div>
                        </WobbleCard>
                    </motion.div>
                    <motion.div className='w-full h-full' initial={{ opacity: 0, x: 100 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
                        <WobbleCard containerClassName={'w-full h-full bg-black rounded-3xl'} className='w-full h-full bg-[#222428] rounded-3xl flex relative flex-col justify-center items-center'>
                            <img src='/images/profile_img.png' className='w-full h-[300px] object-contain'></img>
                        </WobbleCard>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
