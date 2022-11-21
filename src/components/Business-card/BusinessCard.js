import React from 'react'
import image from "../../images/image.png"
import Icon from "../../images/Icon.png"
import Vector from "../../images/Vector.png"
import Twitter from "../../images/Twitter Icon.png"
import Facebook from "../../images/Facebook Icon.png"
import Instagram from "../../images/Instagram Icon.png"
import GitHub from "../../images/GitHub Icon.png"
import "./Business.css"

const BusinessCard = () => {
    return (
        <div>
            <div className='business-box'>
                <img className='image-1' src={image} />
                <div className='content-box'>
                    <h1>Amit Singh</h1>
                    <span>Frontend Developer</span>
                    <a href='#' >amitsingh.website </a>
                    <div className='social-box'>
                        <div className='email-box'> <img src={Icon} /> Email</div>
                        <div className='linkedin-box'> <img src={Vector} /> LinkedIn</div>
                        </div>
                        
                    <h3>About</h3>
                    <p>I am a frontend developer with a particular interest in making things
                        simple and automating daily tasks. I try to keep up with security and
                        best practices, and am always looking for new things to learn.</p>
                    <h3>Interests</h3>
                    <p>Food expert. Music scholar. Reader. Internet
                        fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture
                        ninja. Coffee fanatic.</p>
                        
                        
                </div>
                <div className='social-icon-box'>
                            <img src={Twitter} />
                            <img src={Facebook} />
                            <img src={Instagram} />
                            <img src={GitHub} />
                        </div>
            </div>
        </div>
    )
}

export default BusinessCard