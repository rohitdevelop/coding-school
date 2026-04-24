import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-neutral-900 text-white flex items-center justify-between px-8">
        <div className="text-2xl font-bold">MyApp</div>
        <div className="space-x-4">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/register" className="hover:text-gray-400">Register</Link>
         </div>
      
    </div>
  )
}

export default Navbar
