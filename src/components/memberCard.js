// MemberCard.js
import { useRouter } from 'next/navigation';
import React from 'react';

export default function MemberCard({ url, name, position, isActive, id }) {
    const router = useRouter()
    return (
        <div
            className={`w-full h-full flex flex-col items-center text-white mt-20`}
        >
            <div className='flex  justify-center gap-16 flex-col items-center w-full h-full'>
                <img
                    className={`w-full h-full object-cover transform transition-transform duration-500 ${isActive ? 'scale-[4] md:scale-[1.5]' : 'scale-100'}`}
                    src={url}
                    alt={name}
                />
                {
                    isActive && (
                        <div className='text-center mt-4 gap-2 flex justify-center items-center flex-col'>
                            <h2 className='text-md font-semibold'>{name}</h2>
                            <p className='bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-300 text-lg'>{position}</p>
                            <button className='w-fit h-fit px-10 py-2 border-2 text-white hover:text-black hover:bg-white' onClick={() => router.push(`/profile/${id}`)}>Know More</button>
                        </div>
                    )
                }
            </div>
        </div>
    );
}
