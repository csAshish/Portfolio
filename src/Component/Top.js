import '../App.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import Typewriter from "react-ts-typewriter";



import React, { useState } from 'react'
function Top() {
  const [state, setstate] = useState(true)
  
  return (
    <>
      <div className={state?"theme":"themeoff"}>
        <button className="theme-fix" onClick={()=>{setstate(!state)}}>click me</button>
        <ul className="theme-ul">
          <li>RTL</li>
          <li>Dark Mode</li>
          <li>Seamless</li>
          <li>A+</li>
          <li>A-</li>
          <li>Theme
            <ul className="color-ul">
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </li>
          <li>RESET</li>
        </ul>
      </div>
    <div  className='bar'>
      <img src="https://thumbs.dreamstime.com/b/young-orangutan-smile-young-orangutan-smiled-acted-like-113292887.jpg" alt="lady"/>
      <div className='bar-title'>Ashish Dwivedi</div>
      <ul className='nav-items'>
        <li><a className='hover1' href='#home'>Home</a></li>
        <li><a className='hover1'href='#About1'>About Us</a></li>
        <li ><a className='hover1'href='#what'>What I Do</a></li>
        <li ><a className='hover1'href='#resume1'>Resume</a></li>
        <li ><a className='hover1'href='#port'>Portfolio</a></li>
        <li ><a className='hover1'href='#test'>Testimonial</a></li>
        <li ><a className='hover1'href='#Co'>Contact</a></li>
      </ul>
      <div class="nav-icon">
        <FaFacebook className="icon"/>
        <FaLinkedinIn className="icon"/>
        <FaGithub className="icon"/>
        <FaVolleyballBall className="icon"/>
        </div>
    </div>
   
    <div className='hireme' id='home'>
      
        <div className='hire-mid hire-one'>Welcome</div>
        <div className='hire-mid hire-two'>
          <Typewriter 
         text={"I'm a Full-Stack Developer"} speed={100} loop={true} /></div>
        <div className='hire-mid hire-three'>based in UK, INDIA.</div>
        <button className='hiremebtn hover-btn'>Hire Me</button>

    

    </div>
    </>
  )
}

export default Top