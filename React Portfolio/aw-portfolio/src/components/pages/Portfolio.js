import React from 'react';
import firstPortfolio from '../../images/firstPortfolio.jpg'
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
        <img className='pic' src={firstPortfolio} alt="First Portfolio"></img>
        <h1>First Portfolio</h1>
        <p class="description">This is the second website I ever built. I like to look at it and realize how far I have come in 3 months!</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/second-challenge"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://adamwagh512.github.io/second-challenge/#work"target="_blank">here</a></p>
      </div>
      <div className="card">
        <img className='pic' src={firstPortfolio} alt="First Portfolio"></img>
        <h1>First Portfolio</h1>
        <p class="description">This is the second website I ever built. I like to look at it and realize how far I have come in 3 months!</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/second-challenge"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://adamwagh512.github.io/second-challenge/#work"target="_blank">here</a></p>
      </div>
      </div>
      <div className='row'>
      <div className="card">
        <img className='pic' src={firstPortfolio} alt="First Portfolio"></img>
        <h1>First Portfolio</h1>
        <p class="description">This is the second website I ever built. I like to look at it and realize how far I have come in 3 months!</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/second-challenge"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://adamwagh512.github.io/second-challenge/#work"target="_blank">here</a></p>
      </div>
      <div className="card">
        <img className='pic' src={firstPortfolio} alt="First Portfolio"></img>
        <h1>First Portfolio</h1>
        <p class="description">This is the second website I ever built. I like to look at it and realize how far I have come in 3 months!</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/second-challenge"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://adamwagh512.github.io/second-challenge/#work"target="_blank">here</a></p>
      </div>
      <div className="card">
        <img className='pic' src={firstPortfolio} alt="First Portfolio"></img>
        <h1>First Portfolio</h1>
        <p class="description">This is the second website I ever built. I like to look at it and realize how far I have come in 3 months!</p>
        <p>Check out the Github repo <a href="https://github.com/adamwagh512/second-challenge"target="_blank">here </a></p>
        <p>Check out the deployed site <a href="https://adamwagh512.github.io/second-challenge/#work"target="_blank">here</a></p>
        </div>
      </div>
    </div>
  );
}