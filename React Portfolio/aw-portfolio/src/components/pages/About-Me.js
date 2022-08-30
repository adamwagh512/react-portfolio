import React from "react";
import '../../styles/aboutstyle.css'
import Adam from '../../images/Adam.jpg'

export default function About() {
    return (
        <div className="about">
            <h1>About Me</h1>
            <img className="photo" src={Adam}></img>
            <p>
                Hello, my name is Adam, and I am currently a student in the University of Texas at Austin coding bootcamp!
                I am new to the technology industry, but I am very excited to be learning new skills and look forward to using
                my new knowledge to have a positive impact on society. Prior to starting on my tech journey I spent the better part 
                of a decade working in emergency medical services because I am passionate about helping people in need. Please enjoy my profile
                and be sure to drop me a line using the contact section.
            </p>
        </div>
    );
}