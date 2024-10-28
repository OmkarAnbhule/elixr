// Team.js
import { members } from '@/lib/member.utils';
import React, { useState, useRef, useEffect } from 'react';
import MemberCard from '../memberCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Team() {
    const [activeIndex, setActiveIndex] = useState(1)
    return (
        <div className='w-full h-fit  gap-y-48 bg-black flex justify-center items-center flex-col p-10 mt-5'>
            <div className='w-full h-full flex justify-center items-center flex-col gap-2'>
                <p className='text-white text-4xl text-center'>
                    Meet the <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-300'>visionaries</span> behind the Elixr ecosystem
                </p>
                <p className='text-white text-center text-sm w-full md:w-1/2'>
                    A multi-dimensional team consisting of strategists, technologists, and creatives focused on creating a future we can be proud of.
                </p>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                centeredSlides={true}
                initialSlide={1}
                onSlideChange={(e) => { console.log(e.activeIndex); setActiveIndex(e.activeIndex) }}
                onSwiper={(swiper) => console.log(swiper)}
                className='w-full h-full'
            >
                {
                    members.map((item, index) => (
                        <SwiperSlide key={index} className='w-full h-full flex justify-center items-center'>
                            <MemberCard {...item} id={index} isActive={index === activeIndex} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}
