import { MenuIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const router = useRouter()
    return (
        <div className='w-11/12 h-[60px] flex justify-between mb-auto'>
            <div className='font-bold text-white flex justify-center items-center' onClick={() => router.push('/')}>
                ELIXR
            </div>
            <div className='flex justify-center items-center'>
                <MenuIcon className='text-white' />
            </div>
        </div>
    )
}
