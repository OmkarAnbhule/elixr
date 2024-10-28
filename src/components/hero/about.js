import React from 'react';
import Marquee from '../ui/marquee';
import { HoverEffect } from '../ui/card-hover-effect';
import Image from 'next/image';

export default function About() {
    const firstRow = [
        '/images/ifc.png',
        '/images/uk.png',
        '/images/un.png',
        '/images/wbaf.png',
    ];

    const caraousel = [
        {
            title: 'SDG Alignment',
            url: '/images/about1.png',
        },
        {
            title: 'Smart Cities',
            url: '/images/about2.png',
        },
        {
            title: 'Gen X to Gen Z',
            url: '/images/about3.png',
        },
        {
            title: 'Industry 4.0',
            url: '/images/about4.png',
        },
        {
            title: 'Proprietary Tech Stack',
            url: '/images/about5.png',
        },
        {
            title: 'Sustainability Focused',
            url: '/images/about6.png',
        }
    ]

    return (
        <div className='flex justify-center w-full h-full items-center flex-col mt-52'>
            <div className='flex flex-col justify-center items-center mb-10'>
                <h2 className='text-white text-3xl'>
                    Our <span className='bg-clip-text text-transparent bg-gradient-to-l from-violet-500 to-fuchsia-300 '>Secret</span> Sauce
                </h2>
                <div className='flex flex-wrap justify-center items-center gap-2 w-full'>
                    <HoverEffect items={caraousel} />
                </div>
            </div>
            <Marquee pauseOnHover className="[--duration:5s]">
                {firstRow.map((url, index) => (
                    <div key={index} className="relative">
                        <Image
                            src={url}
                            alt={url}
                            width={60}
                            height={60}
                            className="object-contain filter grayscale invert brightness-0 aspect-square mx-4"
                        />
                    </div>
                ))}
            </Marquee>
        </div >
    );
}
