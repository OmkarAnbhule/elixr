'use client'
import { WobbleCard } from '@/components/ui/wobble-card'
import React from 'react'
import { motion } from 'framer-motion';
import { timeline } from '@/lib/timeline.utils';
import { Separator } from '@/components/ui/separator'
import Navbar from '@/components/Navbar'

export default function page({ params }) {
    const props = timeline[params.slug]
    const isInView = true;

    return (
        <>
            <Navbar />
            <div className='w-full h-full bg-[#15171c] flex justify-center md:p-20 items-center'>
                <div className="flex h-full w-full md:w-4/5 items-center justify-center gap-y-20 flex-col">
                    <div className="grid h-full w-full gap-4 p-2 grid-cols-1 md:grid-cols-5 grid-rows-10 rounded-lg shadow-md">

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="col-span-3 row-span-4 rounded-lg shadow-md flex items-center justify-center"
                        >
                            <WobbleCard containerClassName={'bg-[#15171c] rounded-3xl'} className={`${props.bgColor} w-full h-[500px] rounded-3xl overflow-hidden p-8 flex ${props.theme == 'mac' ? 'flex-col' : ''}`}>
                                <div className={`flex flex-col w-full m-0 text-white justify-around`}>
                                    <div className='flex flex-col md:gap-8 gap-2'>
                                        <p className={`text-4xl md:text-6xl ${props.textColor}`}>{props.title}</p>
                                        <div className={`flex ${props.theme == 'mac' ? 'md:flex-row flex-col gap-6' : 'flex-col gap-2'}`}>

                                            {
                                                props.tabs.map((item, idx) => (
                                                    <p className={`md:text-2xl text-xl ${props.textColor}`} key={idx}>{item}</p>
                                                ))
                                            }
                                        </div>
                                    </div>
                                    <button className='w-fit bg-white text-black mix-blend-screen text-base md:text-lg font-bold h-fit py-[10px] px-4 mt-3 rounded-full' onClick={() => router.push(`/timeline/${props.id}`)}>Learn more</button>
                                </div>

                                {
                                    props.theme == 'mac' ? (
                                        <div className='mac flex flex-col md:mt-8 mt-2 justify-center items-center perspective-1000'>
                                            <div
                                                className={`screen border-4 border-gray-900 rounded-t-xl ${isInView ? 'md:w-80 w-72' : 'md:w-96 w-80'} md:h-52 h-48 ${isInView ? '' : 'transform translate-y-8 -translate-z-72 -rotate-x-60 origin-bottom'} transition-all duration-700 ease-in-out`}
                                            >
                                                <img loading='lazy' src='/images/mac.png' className='w-full h-full' alt="Mac screen" />
                                            </div>
                                            <div className='base relative'>
                                                <div className='base md:w-96 w-80 md:h-3 h-2 bg-[#9d9ea3] rounded-xl shadow-inner shadow-black'></div>
                                                <div className='w-8 h-1 rounded-xl shadow-inner shadow-black bg-[#8d8d8f] absolute left-4'></div>
                                                <div className='w-8 h-1 rounded-xl shadow-inner shadow-black bg-[#8d8d8f] right-4 absolute'></div>
                                            </div>
                                        </div>
                                    ) :
                                        (
                                            <div className='w-[300px] h-full relative'>
                                                <img src={props.url} loading='lazy' className={`absolute ${isInView ? 'bottom-0' : '-bottom-20'} transition-all duration-200 left-5 md:-left-10`}></img>
                                            </div>
                                        )
                                }
                            </WobbleCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="col-span-2 row-span-2 rounded-lg shadow-md flex items-center justify-center"
                        >
                            <WobbleCard containerClassName={'bg-[#15171c] rounded-3xl'} className='bg-[#222428] w-full h-[250px] rounded-3xl relative overflow-hidden shadow-inner'>
                                <svg xmlns="http://www.w3.org/2000/svg" className='absolute bottom-0 transform -right-5 z-[4]' viewBox="0 0 780 320">
                                    <defs>
                                        <linearGradient id={`gradient${props.id}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                            <stop offset="50%" style={{ stopColor: props.svgColors[0], stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: props.svgColors[1], stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <path fill={`url(#gradient${props.id})`} d={props.svgPath}></path>
                                </svg>
                                <div className=' text-white flex justify-center m-0 p-0 items-center gap-10 flex-col w-full h-full z-10'>
                                    <p className='z-10 md:text-8xl text-6xl font-bold'>
                                        £{props.price}M
                                    </p>
                                    <p className='z-10 text-lg antialiased' >
                                        Launch Event
                                    </p>

                                </div>
                            </WobbleCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="col-span-2 row-span-2 rounded-lg shadow-md flex items-center justify-center"
                        >
                            <WobbleCard containerClassName={'bg-[#15171c] rounded-3xl'} className='bg-[#222428] w-full h-[250px] rounded-3xl'>
                                <div className=' text-white flex justify-center m-0 p-0 items-center flex-col w-full h-full gap-4 z-10'>
                                    {
                                        props.date ?
                                            (
                                                <div className='justify-center flex flex-col gap-2 items-center'>
                                                    <p className='md:text-3xl text-2xl'>Launch Event</p>
                                                    < p className={`md:text-6xl text-5xl ${props.dateColor} font-semibold`}>{props.date}</p>
                                                    <button className={`w-fit h-fit px-6 py-3 ${props.btnColor[0]} font-semibold rounded-full ${props.btnColor[1]}`}>Sign up</button>
                                                </div>
                                            ) :
                                            (
                                                <div className='flex justify-center items-center flex-col'>
                                                    <p className='text-center text-4xl w-1/2'>
                                                        Investor <span className='bg-clip-text text-transparent bg-gradient-to-l from-violet-500 to-fuchsia-300'> Gurantee</span>
                                                    </p>
                                                    <p className='text-xl text-center'>Invest with confidence with our investor backed guarantee</p>
                                                </div>
                                            )
                                    }
                                </div>
                            </WobbleCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="col-span-2 row-span-2 w-full h-full shadow-md flex items-center justify-center rounded-3xl"
                        >
                            <WobbleCard containerClassName={'bg-[#15171c] rounded-3xl w-full h-full'} className='sm:px-0 bg-[url("/images/slug1.png")] bg-cover w-full h-[250px] relative rounded-3xl flex justify-center items-center p-0'>
                                <div className=' w-full h-full bg-[rgba(0,0,0,0.23)] backdrop-blur-sm text-white font-semibold flex justify-center items-center rounded-3xl text-center text-2xl'>
                                    Watch trailer
                                </div>
                            </WobbleCard>
                        </motion.div>

                        {
                            !props.date &&
                            (
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className={`col-span-3 row-span-2 rounded-3xl shadow-md bg-[#222428] flex items-center justify-center`}
                                >
                                    <div className='bg-[#0C0C14] w-full h-[250px] rounded-3xl flex justify-between items-center overflow-hidden'>
                                        <div className='flex justify-center items-start px-14 flex-col w-1/2 h-full' >
                                            <p className='text-white text-xl text-start'>Hardware</p>
                                            <p className='text-[#868FA0] text-xl text-start'>Coming 2025.</p>
                                        </div>
                                        <img src='/images/slug2.png' className=' w-1/2 h-full object-cover'>

                                        </img>
                                    </div>
                                </motion.div>
                            )
                        }

                        <motion.div
                            initial={{ opacity: 0, x: props.date ? 100 : -100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="col-span-3 row-span-4 rounded-lg shadow-md flex items-center justify-center"
                        >
                            <WobbleCard containerClassName={'bg-[#15171c] rounded-3xl'} className={`${props.bgColor} w-full h-[500px] rounded-3xl overflow-hidden p-8 flex justify-around flex-col`}>
                                <div className={`flex w-full m-0 text-white justify-center `} >
                                    <p className={`text-4xl md:text-6xl text-center text-white`}><span className={`${props.date && props.dateColor.split('text-[')[1] != props.bgColor.split('bg-[')[1] ? props.dateColor : 'text-white'}`}>Live</span> Reporting</p>
                                </div>
                                <div className='mac flex flex-col md:mt-8 mt-2 justify-center items-center perspective-1000'>
                                    <div
                                        className={`screen border-4 border-gray-900 rounded-t-xl ${isInView ? 'md:w-80 w-72' : 'md:w-96 w-80'} md:h-52 h-48 ${isInView ? '' : 'transform translate-y-8 -translate-z-72 -rotate-x-60 origin-bottom'} transition-all duration-700 ease-in-out`}
                                    >
                                        <img loading='lazy' src='/images/mac2.png' className='w-full h-full' alt="Mac screen" />
                                    </div>
                                    <div className='base relative'>
                                        <div className='base md:w-96 w-80 md:h-3 h-2 bg-[#202021] rounded-xl shadow-inner shadow-black'></div>
                                        <div className='w-8 h-1 rounded-xl shadow-inner shadow-black bg-[#8d8d8f] absolute left-4'></div>
                                        <div className='w-8 h-1 rounded-xl shadow-inner shadow-black bg-[#8d8d8f] right-4 absolute'></div>
                                    </div>
                                </div>

                            </WobbleCard>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: props.date ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1 }}
                            className="col-span-2 row-span-4 grayscale relative rounded-3xl shadow-md overflow-hidden flex items-center justify-center"
                        >
                            <img className='w-full h-full absolute scale-[3] bottom-0 opacity-50 rounded-3xl' src='/images/timeline_bg.png'></img>
                            <div className='w-full h-full text-white text-3xl flex justify-between p-14 items-center flex-col'>
                                <div className='w-full h-full flex justify-center items-center text-center'>
                                    Here is a title for Senze.
                                </div>
                                <div className='bg-white p-6 rounded-full'></div>
                            </div>
                        </motion.div>

                        {props.date && (
                            <motion.div
                                initial={{ opacity: 0, x: 100 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className={`col-span-3 row-span-2 rounded-3xl shadow-md bg-[#222428] flex items-center justify-center`}
                            >
                                <WobbleCard containerClassName={'bg-[#15171c] rounded-3xl w-full h-full'} className='w-full bg-[#222428] h-full gap-3 flex justify-center items-center p-10 flex-col'>
                                    <p className={`text-3xl ${props.dateColor ? props.dateColor : `${props.bgColor} text-transparent bg-clip-text`}  font-semibold text-center`}>Launch Partners</p>
                                    <p className='text-sm text-white'>Senze's route to market</p>
                                    <div className='w-full h-full flex justify-center flex-wrap gap-4 items-center'>
                                        <div className='rounded-full border-2 w-20 h-20'></div>
                                        <div className='rounded-full border-2 w-20 h-20'></div>
                                        <div className='rounded-full border-2 w-20 h-20'></div>
                                        <div className='rounded-full border-2 w-20 h-20'></div>
                                        <div className='rounded-full border-2 w-20 h-20'></div>
                                    </div>
                                </WobbleCard>
                            </motion.div>
                        )}
                    </div>
                    <Separator />
                    <div className='w-full h-full flex justify-start items-center flex-col gap-10 p-2'>
                        <p className='flex justify-start items-center text-start w-full text-white text-3xl font-semibold '>
                            Designed to make a difference.
                        </p>

                        <div className='flex justify-center md:flex-nowrap flex-wrap items-center gap-4 w-full h-full'>
                            {
                                ['one', 'two', 'three'].map((item, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: 0.5 * index }}
                                        key={index} className='w-full md:w-1/3 h-[500px] rounded-xl flex justify-between items-center flex-col p-7 bg-[#222428]'>
                                        <div className='rounded-full w-8 h-8 border-[3px]'>
                                        </div>
                                        <div className='flex justify-center flex-col items-center text-center text-white gap-2'>
                                            <p className='text-xl font-semibold w-3/5'>
                                                This is a title #{item}
                                            </p>
                                            <p className=''>See how company will save the planet we call earth</p>
                                        </div>
                                        <div className='rounded-full p-16 bg-slate-50'>
                                        </div>
                                    </motion.div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='w-full h-full '>
                        <div className='w-full h-full flex flex-col justify-center items-start gap-10'>
                            <p className='text-start text-4xl text-white font-semibold w-3/4'>
                                Get in touch with Senze.
                            </p>
                            <div className='flex h-[350px] justify-around items-center md:flex-nowrap flex-wrap gap-10'>
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className='w-1/2 p-14 rounded-2xl h-full flex justify-center flex-col items-center gap-4 bg-[#222428]'>
                                    <p className='text-white text-xl text-center'>
                                        ArcLive V1 is now live.<br /> Click on the links below to be taken directly to the app & play stores.
                                    </p>
                                    <p className='text-white text-sm text-center' >
                                        See how iPhone reuses materials
                                    </p>
                                    <div className='flex justify-evenly items-center w-full'>
                                        <div className='rounded-full p-14 bg-white'></div>
                                        <div className='rounded-full p-14 bg-white'></div>
                                    </div>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: 100 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 1 }}
                                    className='w-1/2 p-14 rounded-2xl h-full flex justify-center flex-col items-center gap-4 bg-[#222428]'>
                                    <p className='text-white text-xl text-center' >
                                        Request a demo of the consumer & enterprise applications today
                                    </p>
                                    <p className='text-white text-sm text-center' >
                                        Schedule a call now
                                    </p>
                                    <div className='flex justify-evenly items-center w-full h-full'>
                                        <div className='w-4/5 p-14 h-full  rounded-2xl  bg-white'></div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
