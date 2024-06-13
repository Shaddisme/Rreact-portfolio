import React from 'react'
import './Hero.css'
import gathuru from '../../assets/gathuru.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='hero' className='hero'>
        <img src={gathuru} alt="" />
        <h1><span>I'm Shadrack Gathuru,</span> a frontend developer based in Canada.</h1>
        <p>I'm a frontend developer who loves turning ideas into beautiful, user-friendly 
            websites. With a knack for HTML, CSS, and JavaScript, and experience in React, 
            Angular, and Vue, I create responsive designs that look great and work seamlessly. 
            Dive into my projects and see how I blend creativity with code to create seamless 
            digital experiences.
        </p>   
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero