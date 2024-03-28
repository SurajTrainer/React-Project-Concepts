
// Code for mcq type questions for webside


import React, { useState } from 'react'
import style from './Test.module.css'

const questions = [
    {
      questionText: 'Which one is Fruit',
  
      answerOptions: [
        { answerText: 'kerela', isCorrect: false },
        { answerText: 'pumpkin', isCorrect: false },
        { answerText: 'apple', isCorrect: true },
        { answerText: 'usa', isCorrect: false },
      ],
    }, {
      questionText: 'Which one is State',
  
      answerOptions: [
        { answerText: 'tehri', isCorrect: false },
        { answerText: 'punjab', isCorrect: true },
        { answerText: 'apple', isCorrect: false },
        { answerText: 'usa', isCorrect: false },
      ],
    },{
      questionText: 'Which one is district',
  
      answerOptions: [
        { answerText: 'tehri', isCorrect: true },
        { answerText: 'punjab', isCorrect: false },
        { answerText: 'apple', isCorrect: false },
        { answerText: 'usa', isCorrect: false },
      ],
    }
  ]

const Test = () => {

  const [currentQuestion , setCurrentQuestion] = useState(0);
  const [showScore , setshowScore] =   useState(false);
  const [score , setScore] =   useState(0);


  const handleansBtn = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1)
    }

    const nextQst = currentQuestion + 1;
    if (nextQst < questions.length) {
      setCurrentQuestion(nextQst)
    }else{
      setshowScore(true)
    }
  } 


const resetBtn = () => {
  setCurrentQuestion(0)
  setshowScore(false)
  setScore(0)
}

  return (
    <>
    {
      showScore  ? (
        <div className={style.test}>

                Your score is :  <strong className={style.strong}>{score} out of {questions.length}</strong>
         
            <button className={`btn btn-outline-danger ${style.optionBtn}`} onClick={resetBtn}>Reset</button>
        </div>
      ) : (
        <div className={`mt100 flex-coloum ${style.test1}`}> 
         <div className={`${style.questionNo}`}>
          {questions[currentQuestion].questionText}
         </div>

         <div className={style.answer}>
          {questions[currentQuestion].answerOptions.map((Option, i) => (
            <button key={i} className={`btn btn-outline-success ${style.optionBtn}`} onClick={() => handleansBtn(Option.isCorrect)}>{Option.answerText}</button>
          ))}
         </div>
        </div>
      )
    }

    </>
  )
}

export default Test
