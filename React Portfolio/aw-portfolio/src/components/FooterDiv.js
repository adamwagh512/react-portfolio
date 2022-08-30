import React from "react"
import '../styles/FooterDiv.css'
import githubLogo from '../images/github.png'
import twitterlogo from '../images/twitter.png'
import linkedinlogo from '../images/linkedin.png'

function FooterDiv() {
    return ( 
    <div className="footer">
    <h4>Thank you for stopping by, please check me out on social media!</h4>
    <a href= 'https://github.com/adamwagh512'target="_blank"><img className="image" src={githubLogo} alt="github logo"></img></a>
    <a href= 'https://twitter.com/adamwagh'target="_blank"><img className="image" src={twitterlogo} alt="twitter logo"></img></a>
    <a href= 'https://www.linkedin.com/in/adam-wagh-2aa53218/'target="_blank"><img className="image" src={linkedinlogo} alt="linkedIn logo"></img></a>
    </div>
)}

export default FooterDiv