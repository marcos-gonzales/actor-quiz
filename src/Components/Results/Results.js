import React, { useState } from 'react'

import GetActor from '../GetActor/GetActor'
import Modal from '../Modal/Modal'
import classes from './Results.module.css'

const Question = () => {
  const [quizQuestions, setQuizQuestions] = useState(null)
  const [counter, setCounter] = useState(0)
  const [correctAnswer, setCorrectAnswer] = useState(0)
  const [incorrectAnswer, setIncorrectAnswer] = useState(0)
  const [whichQuiz, setWhichQuiz] = useState(false)

  return (
    <>
      {counter === quizQuestions ? (
        <Modal correctAnswer={correctAnswer} counter={counter} />
      ) : null}

      {!quizQuestions || !whichQuiz ? (
        <h2 className={classes.Questions}>How Many Questions</h2>
      ) : null}

      {!whichQuiz ? (
        <div className={classes.QuizDifficulty}>
          <button
            className={classes.Button}
            onClick={() => setWhichQuiz('easy')}
          >
            Easy Quiz
          </button>
          <button
            className={classes.Button}
            onClick={() => setWhichQuiz('hard')}
          >
            Hard Quiz
          </button>
        </div>
      ) : null}

      {!quizQuestions ? (
        <div className={classes.Questions}>
          <button
            className={classes.Button}
            onClick={() => setQuizQuestions(5)}
          >
            5
          </button>
          <button
            className={classes.Button}
            onClick={() => setQuizQuestions(10)}
          >
            10
          </button>
          <button
            className={classes.Button}
            onClick={() => setQuizQuestions(15)}
          >
            15
          </button>
        </div>
      ) : null}

      {quizQuestions && whichQuiz ? (
        <GetActor
          setCounter={setCounter}
          counter={counter}
          setCorrectAnswer={setCorrectAnswer}
          correctAnswer={correctAnswer}
          incorrectAnswer={incorrectAnswer}
          setIncorrectAnswer={setIncorrectAnswer}
          quizQuestions={quizQuestions}
          whichQuiz={whichQuiz}
        />
      ) : null}
    </>
  )
}

export default Question
