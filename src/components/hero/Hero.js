import React from 'react'
import ThreeSphere from '../Sphere'
import Meteors from '../ui/meteors'
import Particles from '../ui/particles'

export default function Hero() {
    return (
        <div className='w-full h-auto flex justify-center items-center flex-col overflow-hidden bg-transparent relative'>
            <Particles
                className="absolute inset-0"
                quantity={100}
                ease={80}
                color={'#ffffff'}
                refresh
            />
            <div className='flex justify-center items-center md:text-[150px] text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-violet-500 to-fuchsia-300'>
                ELIXR
            </div>
            <div className='w-full h-72'>
                <ThreeSphere />
            </div>
            <div className='text-white md:text-3xl text-lg md:w-2/3 w-10/12 flex items-center'>
                <p className='text-center h-full'>
                    <span className='bg-clip-text text-transparent bg-gradient-to-l from-violet-500 to-fuchsia-300'>
                        Elixr
                    </span> is an early stage venture builder that specialises in raising ESG investment and building next generation technologies.
                </p>
            </div>
        </div>
    )
}
