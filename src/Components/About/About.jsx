import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import  gathuru from '../../assets/gathuru.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="about-sections">
            <div className="about-left">
                <img src={gathuru} alt="" />
            </div>
            <div className="about-right">
            <div className="about-para">
                <p> Hi, I'm Shadrack, a frontend developer passionate about creating engaging 
                    and responsive web applications. With a strong background in HTML, CSS, 
                    and JavaScript, I bring designs to life and ensure optimal performance 
                    across all devices. My goal is to leverage technology to create impactful 
                    user experiences.</p>
                <p> I have experience working with modern JavaScript frameworks, and I 
                    continuously strive to enhance my skills and stay updated with the latest 
                    industry trends. Let's build something amazing together!</p>
            </div>
            <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React JS</p>
                            <hr style={{ width: "40%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p>
                            <hr style={{ width: "40%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Next JS</p>
                            <hr style={{ width: "30%" }} />
                        </div>
                    </div>
            </div>     
        </div>
    </div>
  )
}

export default About