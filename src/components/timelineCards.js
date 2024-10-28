import React, { useState, useEffect, useRef } from 'react';
import { WobbleCard } from './ui/wobble-card';
import { BentoGrid, BentoGridItem } from './ui/bento-grid';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const TimelineCard = (props) => {
    const [isInView, setIsInView] = useState(false);
    const screenRef = useRef(null);
    const router = useRouter()

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsInView(true);
                    } else {
                        setIsInView(false);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (screenRef.current) {
            observer.observe(screenRef.current);
        }

        return () => {
            if (screenRef.current) {
                observer.unobserve(screenRef.current);
            }
        };
    }, []);

    return (
        <div className='w-dvw flex-1 relative' ref={screenRef}>
            <BentoGrid className={`w-dvw h-fit md:p-10 p-2 grid-flow-row md:grid-rows-1 grid-rows-4 grid-cols-1 snap-center`}>
                <BentoGridItem className={`w-full md:row-span-4 row-span-2 md:col-span-2 col-span-1 h-full`}>
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
                </BentoGridItem>
                <BentoGridItem className={`w-full h-full col-span-1`}>
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
                </BentoGridItem>
                <BentoGridItem className={`w-full h-full col-span-1`}>
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
                </BentoGridItem>
            </BentoGrid>
            <div className="absolute w-4/5 bg-slate-800 h-1 bottom-10 left-0 right-0 mx-auto">
                <div className="relative w-full">
                    <div className='absolute w-1/2 border-2'></div>
                    <div
                        className="absolute rounded-full bg-[#15171c] w-6 h-6 -top-[8.8px] flex justify-center items-center left-1/2 "
                    >
                        <div className="relative rounded-full bg-slate-600 w-3 h-3"></div>
                    </div>
                    <div className='absolute text-center text-white top-3 w-full flex justify-center'>
                        {props.timeline}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimelineCard;