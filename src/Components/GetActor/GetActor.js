import React, { useEffect, useState } from 'react'
import axios from 'axios'
import classes from './GetActor.module.css'

const GetActor = ({
  whichQuiz,
  setCounter,
  counter,
  correctAnswer,
  setCorrectAnswer,
  inCorrectAnswer,
  setIncorrectAnswer,
  quizQuestions,
}) => {
  const [actor, setActor] = useState(null)
  const [getInput, setInput] = useState('')
  const [correct, setCorrect] = useState(null)
  const [wrong, setWrong] = useState(null)
  const [number, setNumber] = useState(
    Math.floor(Math.random() * Math.floor(75) + 1)
  )
  const [hint, setHint] = useState(false)
  const [maleOrFemale, setMaleOrFemale] = useState('male')
  const [radioButtonTwo, setRadioButtonTwo] = useState(
    Math.floor(Math.random() * Math.floor(75) + 1)
  )
  const [radioButtonThree, setRadioButtonThree] = useState(
    Math.floor(Math.random() * Math.floor(75) + 1)
  )
  const [radioButtonFour, setRadioButtonFour] = useState(
    Math.floor(Math.random() * Math.floor(75) + 1)
  )

  const [radioButtonValue, setRadioButtonValue] = useState(null)
  const [radioButtonAnswer, setRadioButtonAnswer] = useState(null)

  const getRandomNumber = () => {
    let number = Math.floor(Math.random() * Math.floor(2) + 1)
    if (number === 1) {
      setMaleOrFemale('male')
    } else {
      setMaleOrFemale('female')
    }
    setCounter(counter + 1)
    setCorrect(false)
    setHint(false)
    setWrong(false)
    setIncorrectAnswer(inCorrectAnswer + 1)
    setNumber(Math.floor(Math.random() * Math.floor(75) + 1))
    setRadioButtonTwo(Math.floor(Math.random() * Math.floor(75) + 1))
    setRadioButtonThree(Math.floor(Math.random() * Math.floor(75) + 1))
    setRadioButtonFour(Math.floor(Math.random() * Math.floor(75) + 1))

    //To filter out duplicates
    if (number === radioButtonTwo) {
      let rando = Math.floor(Math.random() * Math.floor(75) + 1)
      setRadioButtonTwo(rando)
      console.log('working')
    }
    if (number === radioButtonThree) {
      let rando = Math.floor(Math.random() * Math.floor(75) + 1)
      setRadioButtonThree(rando)
      console.log('working')
    }
    if (number === radioButtonFour) {
      let rando = Math.floor(Math.random() * Math.floor(75) + 1)
      setRadioButtonFour(rando)
      console.log('working')
    }
  }

  const actorList = {
    male: {
      1: 'Robert De Niro',
      2: 'Jack Nicholson',
      3: 'Denzel Washington',
      4: 'Guy Pearce',
      5: 'Matt Dillon',
      6: 'Chris Rock',
      7: 'Vincent Cassel',
      8: 'Christopher Walken',
      9: 'Lee Byung Hun',
      10: 'Jamie Bell',
      11: 'Michael Caine',
      12: 'Christian Bale',
      13: 'Adrien Brody',
      14: 'Edward Norton',
      15: 'Denzel Washington',
      16: 'Paul Giamatti',
      17: 'Forest Whitaker',
      18: 'Don Cheadle',
      19: 'Jake Gyllenhaal',
      20: 'Daniel Craig',
      21: 'Steve Buscemi',
      22: 'Michael Sheen',
      23: 'Will Smith',
      24: 'Ben Foster',
      25: 'Liev Schreiber',
      26: 'John Krasinski',
      27: 'Ryan Gosling',
      28: 'Hugh Jackman',
      29: 'Woody Allen',
      30: 'James McAvoy',
      31: 'Mark Wahlberg',
      32: 'Kevin Spacey',
      33: 'Will Ferrell',
      34: 'Gerard Butler',
      35: 'Russell Crowe',
      36: 'Morgan Freeman',
      37: 'Matthew McConaughey',
      38: 'Mark Ruffalo',
      39: 'Robert Downey Jr',
      40: 'Michael J Fox',
      41: 'Heath Ledger',
      42: 'Al Pacino',
      43: 'Clint Eastwood',
      44: 'Anthony Hopkins',
      45: 'Johnny Depp',
      46: 'Liam Neeson',
      47: 'Nicolas Cage',
      48: 'Keanu Reeves',
      49: 'Harrison Ford',
      50: 'Mel Gibson',
      51: 'Jim Carrey',
      52: 'Bruce Willis',
      53: 'Jamie Foxx',
      54: 'Tom Hanks',
      55: 'Tom Cruise',
      56: 'Bradley Cooper',
      57: 'Channing Tatum',
      58: 'James Franco',
      59: 'Ashton Kutcher',
      60: 'Joaquin Phoenix',
      61: 'Steve Carell',
      62: 'Patrick Stewart',
      63: 'Bill Nighy',
      64: 'Vince Vaughn',
      65: 'Peter Dinklage',
      66: 'Jeffrey Wright',
      67: 'Ed Harris',
      68: 'James Marsden',
      69: 'Bryan Cranston',
      70: 'Aaron Paul',
      71: 'Dean Norris',
      72: 'Giancarlo Esposito',
      73: 'Jason Bateman',
      74: 'Skylar Gaertner',
      75: 'Michael C Hall',
    },
    female: {
      1: 'Maisie Williams',
      2: 'Katharine Hepburn',
      3: 'Anya Taylor Joy',
      4: 'Gina Carano',
      5: 'Elizabeth Debicki',
      6: 'Rosario Dawson',
      7: 'Emilia Clarke',
      8: 'Sophie Turner',
      9: 'Thandie Newton',
      10: 'Evan Rachel Wood',
      11: 'Tessa Thompson',
      12: 'Anna Gunn',
      13: 'Betsy Brandt',
      14: 'Laura Linney',
      15: 'Sofia Hublitz',
      16: 'Julia Garner',
      17: 'Lisa Emery',
      18: 'Emma Watson',
      19: 'Helena Bonham Carter',
      20: 'Julie Christie',
      21: 'Jennifer Lawrence',
      22: 'Margot Robbie',
      23: 'Kaley Cuoco',
      24: 'Melissa Rauch',
      25: 'Mayim Bialik',
      26: 'Jennifer Carpenter',
      27: 'Luna Lauren Velez',
      28: 'Stephanie Beatriz',
      29: 'Melissa Fumero',
      30: 'Chelsea Peretti',
      31: 'Lauren Ash',
      32: 'America Ferrera',
      33: 'Nichole Sakura',
      34: 'Angela Kinsey',
      35: 'Jenna Fischer',
      36: 'Mindy Kaling',
      37: 'Amy Poehler',
      38: 'Aubrey Plaza',
      39: 'Gal Gadot',
      40: 'Connie Nielsen',
      41: 'Robin Wright',
      42: 'Courteney Cox',
      43: 'Lisa Kudrow',
      44: 'Mary Louise Parker',
      45: 'Elizabeth Perkins',
      46: 'Regina King',
      47: 'Sara Vickers',
      48: 'Julia Stiles',
      49: 'Larisa Oleynik',
      50: 'Jennifer Coolidge',
      51: 'Shannon Elizabeth',
      52: 'Molly Ringwald',
      53: 'Ally Sheedy',
      54: 'Linda Hamilton',
      55: 'Sarah Jessica Parker',
      56: 'Kim Cattrall',
      57: 'Kristin Davis',
      58: 'Cynthia Nixon',
      59: 'Reese Witherspoon',
      60: 'Nicole Kidman',
      61: 'Shailene Woodley',
      62: 'Zoe Kravitz',
      63: 'Laura Dern',
      64: 'Katey Sagal',
      65: 'Maggie Siff',
      66: 'Sarah Michelle Gellar',
      67: 'Alyson Hannigan',
      68: 'Kaitlin Olson',
      69: 'Sarah Wayne Callies',
      70: 'Kristen Bell',
      71: 'Taylor Schilling',
      72: 'Kate Mulgrew',
      73: 'Uzo Aduba',
      74: 'Danielle Brooks',
      75: 'Dascha Polanco',
    },
  }

  useEffect(() => {
    axios
      .get(
        `https://imdb-api.com/en/API/searchname/k_hcieroty/${actorList[maleOrFemale][number]}`
      )
      .then((data) => setActor(data.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number])

  const checkAnswer = () => {
    const firstName = actor.results[0].title.split(' ')[0].toLowerCase()
    const secondName = actor.results[0].title.split(' ')[1].toLowerCase()

    console.log(getInput)
    console.log(secondName)

    if (
      getInput === firstName ||
      getInput === secondName ||
      (getInput === firstName && getInput === secondName)
    ) {
      setWrong(false)
      setCorrect(true)
      setCorrectAnswer(correctAnswer + 1)
      setInput('')
    } else {
      setCorrect(false)
      setWrong(true)
      setIncorrectAnswer(inCorrectAnswer + 1)
      setInput('')
    }

    if (
      (quizQuestions === 15 && counter === 14) ||
      (quizQuestions === 10 && counter === 9) ||
      (quizQuestions === 5 && counter === 4)
    ) {
      getRandomNumber()
    }
    setTimeout(() => {
      getRandomNumber()
    }, 3000)
  }

  const needAHint = () => {
    setHint(true)
  }

  const handleRadioButton = (e) => {
    setRadioButtonValue(e.target.name)
    setRadioButtonAnswer(e.target.id)
    console.log(radioButtonValue, 'THIS IS RADIOBUTTON VALUE')
    console.log(radioButtonAnswer, 'THIS IS RADIONBUTTONANSWER')
  }

  const handleRadioSubmit = (e) => {
    e.preventDefault()
    if (radioButtonAnswer === radioButtonValue) {
      setWrong(false)
      setCorrect(true)
      setCorrectAnswer(correctAnswer + 1)
    } else {
      setCorrect(false)
      setWrong(true)
      setIncorrectAnswer(inCorrectAnswer + 1)
    }
    if (
      (quizQuestions === 15 && counter === 14) ||
      (quizQuestions === 10 && counter === 9) ||
      (quizQuestions === 5 && counter === 4)
    ) {
      getRandomNumber()
    }
    setTimeout(() => {
      getRandomNumber()
    }, 3000)
  }

  const handleInputHandler = (e) => {
    setInput(e.target.value.toLowerCase())
  }

  if (!actor) return <h1 className={classes.Waiting}>Geting actorss..</h1>
  if (!whichQuiz) return <h1>Choose easy quiz or hard quiz..</h1>

  console.log(actor.results[0].title)
  return (
    <div className={classes.ActorContainer}>
      <h4>Can you guess this actor?</h4>
      <div>
        <img
          alt={actor.results[0].title}
          style={{ width: '300px', height: '300px', borderRadius: '50%' }}
          src={actor.results[0].image}
          loading='lazy'
        />
        <p style={{ color: 'gray' }}>Who is this??</p>

        {whichQuiz === 'hard' ? (
          <div className={classes.InputForm}>
            <input
              type='text'
              onChange={handleInputHandler}
              value={getInput}
              placeholder='Ted Danson..'
            />
            <button onClick={checkAnswer}>Submit</button>
          </div>
        ) : whichQuiz === 'easy' ? (
          <form className={classes.Form}>
            <input
              type='radio'
              id={
                counter === 1 || counter === 3 || counter === 7
                  ? actorList[maleOrFemale][radioButtonTwo]
                  : counter === 4 || counter === 5
                  ? actorList[maleOrFemale][radioButtonThree]
                  : counter === 8 || counter === 9 || counter === 13
                  ? actorList[maleOrFemale][radioButtonFour]
                  : actorList[maleOrFemale][number]
              }
              onChange={handleRadioButton}
              name={actorList[maleOrFemale][number]}
            ></input>
            <label
              htmlFor={
                counter === 1 || counter === 3 || counter === 7
                  ? actorList[maleOrFemale][radioButtonTwo]
                  : counter === 4 || counter === 5
                  ? actorList[maleOrFemale][radioButtonThree]
                  : counter === 0 ||
                    counter === 8 ||
                    counter === 9 ||
                    counter === 13
                  ? actorList[maleOrFemale][radioButtonFour]
                  : actorList[maleOrFemale][number]
              }
            >
              {counter === 1 || counter === 3 || counter === 7
                ? actorList[maleOrFemale][radioButtonTwo]
                : counter === 4 || counter === 5
                ? actorList[maleOrFemale][radioButtonThree]
                : counter === 0 ||
                  counter === 8 ||
                  counter === 9 ||
                  counter === 13
                ? actorList[maleOrFemale][radioButtonFour]
                : actorList[maleOrFemale][number]}
            </label>

            <input
              type='radio'
              id={
                counter === 1 || counter === 3 || counter === 7
                  ? actorList[maleOrFemale][number]
                  : actorList[maleOrFemale][radioButtonTwo]
              }
              onChange={handleRadioButton}
              name={actorList[maleOrFemale][number]}
            ></input>
            <label
              htmlFor={
                counter === 1 || counter === 3 || counter === 7
                  ? actorList[maleOrFemale][number]
                  : actorList[maleOrFemale][radioButtonTwo]
              }
            >
              {counter === 1 || counter === 3 || counter === 7
                ? actorList[maleOrFemale][number]
                : actorList[maleOrFemale][radioButtonTwo]}
            </label>

            <input
              type='radio'
              id={
                counter === 4 || counter === 5
                  ? actorList[maleOrFemale][number]
                  : actorList[maleOrFemale][radioButtonThree]
              }
              onChange={handleRadioButton}
              name={actorList[maleOrFemale][number]}
            ></input>
            <label
              htmlFor={
                counter === 4 || counter === 5
                  ? actorList[maleOrFemale][number]
                  : actorList[maleOrFemale][radioButtonThree]
              }
            >
              {counter === 4 || counter === 5
                ? actorList[maleOrFemale][number]
                : actorList[maleOrFemale][radioButtonThree]}
            </label>

            <input
              type='radio'
              id={
                counter === 0 ||
                counter === 8 ||
                counter === 9 ||
                counter === 13
                  ? actorList[maleOrFemale][number]
                  : actorList[maleOrFemale][radioButtonFour]
              }
              onChange={handleRadioButton}
              name={actorList[maleOrFemale][number]}
            ></input>
            <label
              htmlFor={
                counter === 0 ||
                counter === 8 ||
                counter === 9 ||
                counter === 13
                  ? actorList[maleOrFemale][number]
                  : actorList[maleOrFemale][radioButtonFour]
              }
            >
              {counter === 0 || counter === 8 || counter === 9 || counter === 13
                ? actorList[maleOrFemale][number]
                : actorList[maleOrFemale][radioButtonFour]}
            </label>
            <button className={classes.Button} onClick={handleRadioSubmit}>
              Submit
            </button>
          </form>
        ) : null}

        {correct ? <h1>You are correct!! </h1> : null}

        {wrong ? (
          <h1>
            You are wrong!! their name is {actorList[maleOrFemale][number]}
          </h1>
        ) : null}

        {hint ? (
          <div>
            <h4>{actor.results[0].description}</h4>
          </div>
        ) : null}

        <button
          className={classes.Button}
          onClick={needAHint}
          disabled={hint ? 'true' : null}
          style={{ marginTop: '20px' }}
        >
          Need a hint?
        </button>
      </div>
    </div>
  )
}

export default GetActor
