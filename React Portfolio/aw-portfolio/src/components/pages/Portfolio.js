import React from 'react';
import firstPortfolio from '../../images/firstPortfolio.jpg'
import passwordGen from '../../images/password-generator.jpg'
import scheduler from '../../images/scheduler.jpg'
import dog from '../../images/dog.jpg'
import tome from '../../images/tome.jpg'
import translator from '../../images/translator.jpg'
import '../../styles/portfoliostyle.css'
export default function Portfolio() {
  return (
    <div className='portfolio'>
      <h1>Portfolio</h1>
      <div className='row'>
      <div className="card">
        <img className='pic' src={firstPortfolio} alt="First Portfolio"></img>
        <h1>First Portfolio</h1>
        <p class="description">This is the second website I ever built. I like to look at it and realize how far I have come in 3 months!</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/second-challenge"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://adamwagh512.github.io/second-challenge/#work"target="_blank">here</a></p>
      </div>
      <div className="card">
        <img className='pic' src={passwordGen} alt="Password Generator"></img>
        <h1>Password Generator</h1>
        <p class="description">This is my first Javascript project! I spent hours trying to figure this one out</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/password-generator"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://adamwagh512.github.io/password-generator/"target="_blank">here</a></p>
      </div>
      <div className="card">
        <img className='pic' src={scheduler} alt="First Portfolio"></img>
        <h1>Scheduler</h1>
        <p class="description">Here is a nice little workday scheduler that utilizes local storage</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/your-dog-ate-what"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://adamwagh512.github.io/password-generator/"target="_blank">here</a></p>
      </div>
      </div>
      <div className='row'>
      <div className="card">
        <img className='pic' src={dog} alt="First Portfolio"></img>
        <h1>Your Dog Ate What!?</h1>
        <p class="description">A group project that lets you know if your dog ate something dangerous</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/your-dog-ate-what"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://adamwagh512.github.io/your-dog-ate-what/"target="_blank">here</a></p>
      </div>
      <div className="card">
        <img className='pic' src={tome} alt="First Portfolio"></img>
        <h1>Battle of the Shadow Tome</h1>
        <p class="description">My second group project, It's a fun multiplayer game to play online with your friends!</p>
        <p>Check out the Github repo <a href="https://github.com/toddayres06/Project2"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://the-shadow-tome.herokuapp.com/"target="_blank">here</a></p>
      </div>
      <div className="card">
        <img className='pic' src={translator} alt="First Portfolio"></img>
        <h1>Medical Translator</h1>
        <p class="description">For our final group project, we built and medical translator so you can convey basic medical info to anybody anywhere</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/Medical-Translator"target="_blank">here </a></p>
        <p>Deployed site coming soon!</p>
        </div>
      </div>
    </div>
  );
}