import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border bg-blue-300  flex justify-between items-center px-2 py-3 my-2 mx-1 rounded-md'>

        <div><p className='text-4xl font-medium'>Test</p></div>
        <div className='flex gap-2'>
            <Link href={"/login"} className='block border py-2 px-5 bg-blue-50 rounded-md hover:bg-blue-200 transition-all'>Login</Link>
            <Link href={"/register"} className='block border py-2 px-5 bg-blue-50 rounded-md hover:bg-blue-200 transition-all'>Register</Link>
        </div>
    </div>
  )
}

export default Navbar