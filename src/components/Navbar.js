import { MenuIcon } from 'lucide-react'
import React from 'react'

export default function Navbar() {
    return (
        <div className='w-11/12 h-[60px] flex justify-between mb-auto'>
            <div className='font-bold text-white flex justify-center items-center'>
                ELIXR
            </div>
            <div className='flex justify-center items-center'>
                <MenuIcon className='text-white' />
            </div>
        </div>
    )
}
