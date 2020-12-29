import React from 'react'

import classes from './Modal.module.css'

const Modal = (props) => {
  let finalScore
  let result = props.correctAnswer / props.counter
  result === 1
    ? (finalScore = 100)
    : (finalScore = result.toFixed(2).split('').splice(2, 4).join(''))
  console.log(finalScore)

  return (
    <div className={classes.Modal}>
      <h1 style={{ fontWeight: '300' }}>Thanks for playing</h1>
      <h4>
        You've scored {props.correctAnswer} out of {props.counter}
      </h4>
      <h4>{finalScore}%</h4>
      {finalScore <= 20 ? (
        <p>Phew! That was embarrasing.. better luck next time</p>
      ) : finalScore > 20 && finalScore <= 30 ? (
        <p>You can use some practice..</p>
      ) : finalScore < 60 && finalScore >= 31 ? (
        <p>You're not bad but you're not good.. keep on practicing</p>
      ) : finalScore < 80 && finalScore >= 60 ? (
        <p>Someone has been keeping up with their stuff :)</p>
      ) : finalScore >= 80 ? (
        <p>Wow, You must be on Eli's level!</p>
      ) : (
        <p>Ooops something went wrong..</p>
      )}
    </div>
  )
}

export default Modal
