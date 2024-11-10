import { useState } from 'react'

const Button = ({handleClick , text }) => {

  return (
    <button onClick={handleClick}>{text}</button>
  )
}
const Statistics = ({good , neutral , bad , all , average , Feedback}) => {
  if(good === 0 && bad === 0 && neutral === 0){

    return <p>No Feedback Given</p>
    
  }
  return (
    <>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p> 
      <p>All {all}</p>
      <p>Average {average} </p>
      <p>Positive FeedBack : {Feedback} </p>
    </>

  )

}
const App = () => {

  const [good , setGood ] = useState(0);
  const [neutral , setNeutral ] = useState(0);
  const [bad, setBad ] = useState(0);
  const [all , setAll] = useState(0);
  const [average, setAverage ] = useState(0);
  const [posFeedback, setPosFeedback] = useState(0);

  const handleGood = () =>{

    const newValue = good + 1;
    const newAll = newValue + bad + neutral
    const newAverage = (newValue - bad) / newAll
    const newFeedback = (newValue / newAll) * 100
    setGood(newValue)
    setAll(newAll)
    setAverage(newAverage)
    setPosFeedback(newFeedback)

  }
  const handleBad = () =>{

    const newValue = bad + 1;
    const newAll = newValue + good + neutral
    const newAverage = (good - newValue ) / newAll
    const newFeedback = (good / newAll) * 100
    setBad(newValue)
    setAll(newAll)
    setAverage(newAverage)
    setPosFeedback(newFeedback)

  }
  const handleNeutral = () =>{

    const newValue = neutral + 1;
    const newAll = newValue + good + bad
    const newFeedback = (good / newAll) * 100
    setNeutral(newValue)
    setAll(newAll)
    setPosFeedback(newFeedback)

  }


  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button handleClick={handleGood} text="Good"></Button>
      <Button handleClick={handleNeutral} text="Neutral"></Button>
      <Button handleClick={handleBad} text="Bad"></Button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} Feedback={posFeedback} ></Statistics>
      

    </div>
  )
  

}



export default App
