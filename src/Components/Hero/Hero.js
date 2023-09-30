import React from 'react'
import './Hero.css'
function Hero() {
  return (
    <div className='relative'>
      <img  src='./assets/hero.png'/>
        <div className='absolute top-1/4 left-1/4 text-white'>
          <p className='text-center'>Give Hope for Hopeless</p>
          <h1 className='text-7xl'>Helping Each Other <br /> can make world better</h1>
          <p className='text-2xl text-center'>We Seek Out World Changers And Difference Makers Around The <br/> Globe, And Equip ThemTo Fulfil Their Unqiue Purpose.</p>
          <div className='flex justify-center items-center mt-3'>
          <button className='py-3 px-5 mr-3 bg-secondary rounded'>Donate Now</button>
          <button className='py-3 px-5 mr-3 border border-secondary rounded'>Know About Us</button>
          </div>
        </div>
    </div>
  )
}

export default Hero