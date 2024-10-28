import React, { useState } from 'react';

export default function Trailer() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='w-full flex flex-col justify-center items-center m-20 gap-20'>
            <div className='flex justify-center items-center text-center text-3xl text-white'>
                <p>
                    Creating an ecosystem called&nbsp;
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-300'>
                        planet.earth
                    </span>
                </p>
            </div>

            <div className='flex justify-center items-center relative flex-col'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <p className={`text-3xl text-white font-bold absolute ${isHovered ? '-top-2' : 'top-1/2'} transition-all  duration-500 z-10`}>
                    trailer
                </p>
                <div
                    className='relative w-[380px] h-[200px] mt-8'
                >
                    <img
                        src='/images/trailer.png'
                        alt='Thumbnail'
                        className={`absolute brightness-[60%] top-0 left-0 w-full h-full rounded-3xl object-cover transition-opacity duration-500 ${isHovered ? 'opacity-0' : 'opacity-100'}`}
                    />

                    <video
                        src='/videos/trailer.mp4'
                        muted
                        loop
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                        autoPlay={true}
                    />
                </div>
            </div>
        </div>
    );
}
