import '../App.css'
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaVolleyballBall } from "react-icons/fa";
import Typewriter from "react-ts-typewriter";



import React from 'react'
function addclass(){

}
function Top() {
  return (
    <>
      <div className="theme">
        <button className="theme-fix" onClick={(e)=>addclass(e)}>click me</button>
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
        <li className='hover1'>Home</li>
        <li className='hover1'>About Me</li>
        <li className='hover1'>What I Do</li>
        <li className='hover1'>Resume</li>
        <li className='hover1'>Portfolio</li>
        <li className='hover1'>Testimonial</li>
        <li className='hover1'>Contact</li>
      </ul>
      <div class="nav-icon">
        <FaFacebook className="icon"/>
        <FaLinkedinIn className="icon"/>
        <FaGithub className="icon"/>
        <FaVolleyballBall className="icon"/>
        </div>
    </div>
   
    <div className='hireme'>
      
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