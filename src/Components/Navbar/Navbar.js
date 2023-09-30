import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <nav>
       <div className='nav-container flex justify-between items-center bg-white '>
      <div>
        <img src='./assets/Logo.png' alt=''></img>
      </div>
      <div >
        <a className='mx-7' href=''>Home</a>
        <a className='mx-7' href=''>Gallery</a>
        <a className='mx-7' href=''>About Us</a>
        <a className='mx-7' href=''>How we help</a>
      </div>
      <div>
        <button className='text-white p-2 rounded contact'>Contact Us</button>
      </div>
       </div>
    </nav>
  )
}

export default Navbar