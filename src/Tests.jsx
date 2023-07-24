import React from 'react'
import { useState } from 'react';
import "./Tests.css";
import Fade from 'react-reveal';

const Tests = () => {
  const [showFinalResult, setFinalResult] = useState(false);
  const [score,setScore]=useState(0);
  const [currentQuestion ,setCurrentQuestion] = useState(0);


  const questions = [
    {
      text: "how much is the horsepower of the bugatti chiron ?",
      options: [
        { id: 0, text: "1700 HP", isCorrect: false },
        { id: 1, text: "1500 HP", isCorrect: true },
        { id: 3, text: "1200 HP", isCorrect: false },

      ],
    },
    {
      text: "How much does of the Rolls Royce Cullinan cost ?",
      options: [
        { id: 0, text: "300.000$", isCorrect: false },
        { id: 1, text: "400.000$", isCorrect: false },
        { id: 3, text: "500.000$", isCorrect: true },
      ],
    },
    {
      text: "How many seconds is the lamborghini urus 0-100 km/h ?",
      options: [
        { id: 0, text: "3.5 S", isCorrect: false },
        { id: 1, text: "3.3 S", isCorrect: true },
        { id: 3, text: "3.7 S", isCorrect: false },
      ],
    },
    {
      text: "How many units of Bugatti Divo were produced ?",
      options: [
        { id: 0, text: "17", isCorrect: true },
        { id: 1, text: "57", isCorrect: false },
        { id: 3, text: "77", isCorrect: false },
      ],
    },
    {
      text: "WHEN DID THE LAMBOrghini REVUelto GO ON SALE ?",
      options: [
        { id: 0, text: "25 MAY 2023", isCorrect: false },
        { id: 1, text: "27 APRIL 2023", isCorrect: true },
        { id: 3, text: "30 APRIL 2023", isCorrect: false },
      ],
    },
    {
      text: "how much is the horsepower of the tesla model s plaid ?",
      options: [
        { id: 0, text: "777 HP", isCorrect: false },
        { id: 1, text: "977 HP", isCorrect: false },
        { id: 3, text: "1020 HP", isCorrect: true },
      ],
    },
    {
      text: "How much does of the TESLA CYBERTRUCK cost ?",
      options: [
        { id: 0, text: "50.000$", isCorrect: true },
        { id: 1, text: "45.000$", isCorrect: false },
        { id: 3, text: "57.000$", isCorrect: false },
      ],
    },
    {
      text: "how much is the torque of the bentley bentayga ?",
      options: [
        { id: 0, text: "907 NM", isCorrect: false },
        { id: 1, text: "755 NM", isCorrect: false },
        { id: 3, text: "647 NM", isCorrect: true },
      ],
    },
    {
      text: "How much does of the MERCEDES GLS600 cost ?",
      options: [
        { id: 0, text: "195.000$", isCorrect: false },
        { id: 1, text: "197.000$", isCorrect: true },
        { id: 3, text: "200.000$", isCorrect: false },
      ],
    },
    {
      text: "Where is the Bentley Flying Spur manufactured ?",
      options: [
        { id: 0, text: "ENGLAND", isCorrect: true },
        { id: 1, text: "AMERICA", isCorrect: false },
        { id: 3, text: "FRANCE", isCorrect: false },
      ],
    },

    {
      text: "Which is the MERcedes G63 AMG engine ?",
      options: [
        { id: 0, text: "4.7L, W-12", isCorrect: false },
        { id: 1, text: "4.5L, W-8", isCorrect: false },
        { id: 3, text: "4.0L, W-8 ", isCorrect: true },
      ],
    },

    {
      text: "How much weight the ROLLS ROYCE PHANTOM ?",
      options: [
        { id: 0, text: "3.100 KG", isCorrect: false },
        { id: 1, text: "2.997 KG", isCorrect: true },
        { id: 3, text: "2.995 KG", isCorrect: false },
      ],
    },
    {
      text: "how much is the top speed of the mclaren 720s ?",
      options: [
        { id: 0, text: "377 KM/H", isCorrect: true },
        { id: 1, text: "337 KM/H", isCorrect: false },
        { id: 3, text: "327 KM/H", isCorrect: false },
      ],
    },
    {
      text: "WHICH ENGINE DOES CADILLAC THE ONE USE ?",
      options: [
        { id: 0, text: "7.0, W-12 DIESEL", isCorrect: false },
        { id: 1, text: "9.0, W-16, DIESEL", isCorrect: false },
        { id: 3, text: "8.0L, W-16 DIESEL", isCorrect: true },
      ],
    },
    {
      text: "How many transmission does the Mercedes S Class have ?",
      options: [
        { id: 0, text: "5-SPEED", isCorrect: false },
        { id: 1, text: "7-SPEED", isCorrect: true },
        { id: 3, text: "9-SPEED", isCorrect: false },
      ],
    },

    {
      text: "Where are Ford, Dodge and Chevrolet trucks manufactured ?",
      options: [
        { id: 0, text: "AMERICA", isCorrect: true },
        { id: 1, text: "ENGLAND", isCorrect: false },
        { id: 3, text: "FRANCE", isCorrect: false },
      ],
    },
    {
      text: "How much does of the MERCEDES GLS600 cost ? ",
      options: [
        { id: 0, text: "250.000$", isCorrect: false },
        { id: 1, text: "300.000$", isCorrect: true },
        { id: 3, text: "270.000$", isCorrect: false },
      ],
    },
  ];

  const optionClicked = (isCorrect)=>{
      if(isCorrect){
        setScore(score +1);
      }

      if(currentQuestion + 1 < questions.length){
        setCurrentQuestion(currentQuestion + 1)
      }else{
        setFinalResult(true);
      }
  }

  const restartGame = ()=>{
    setScore(0);
    setCurrentQuestion(0);
    setFinalResult(false);
  }



  return (
    <div className='Tests-div'>
  

<div className="tests-cont">
  <div className='tests-container'>
    <Fade bottom>
        <h1 className='tests2'>Tests about the car</h1>
        <h2 className='tests3'>Current Score : {score}</h2>
</Fade>

        {
          showFinalResult ?
            <div className='result'>
              <h1 className='tests6'>Result</h1>
              <h2 className='tests7'>
                {score} out of {questions.length} you are -  {Math.floor((score/questions.length)*100)}% -  are knowledgeable <br/> about the cars 
              </h2>
              <button className='tests9' onClick={()=>restartGame()}>Restart Test</button>
            </div>
            :
                 
            <div>
              <Fade bottom>
              <h2 className='tests4'>Question {currentQuestion +1} out of {questions.length}</h2>
              </Fade>
              <Fade bottom>
              <h3 className='tests5'>{questions[currentQuestion].text}</h3>
              </Fade>
              <ul>
                {questions[currentQuestion].options.map((option)=>{
                  return (
                    <li>
                      <Fade bottom>
                    <button className='tests8' onClick={()=> optionClicked(option.isCorrect)} key={option.id}>{option.text}</button>
                    </Fade>
                    </li>
                  )
                })}
              </ul>
            </div>

        }
      </div>


</div>





    </div>
  )
}

export default Tests