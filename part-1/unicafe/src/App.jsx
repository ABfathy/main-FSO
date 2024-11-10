import { useState } from 'react'

const Button = ({handleClick , text }) => {

  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {

  const [good , setGood ] = useState(0);
  const [neutral , setNeutral ] = useState(0);
  const [bad, setBad ] = useState(0);

  const handleGood = () =>{

    const newValue = good + 1;
    setGood(newValue)

  }
  const handleBad = () =>{

    const newValue = bad + 1;
    setBad(newValue)

  }
  const handleNeutral = () =>{

    const newValue = neutral + 1;
    setNeutral(newValue)

  }

  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button handleClick={handleGood} text="Good"></Button>
      <Button handleClick={handleNeutral} text="Neutral"></Button>
      <Button handleClick={handleBad} text="Bad"></Button>
      <h1>Statistics</h1>
      <p>Good {good}</p>
      <p>Neutral {neutral}</p>
      <p>Bad {bad}</p> 

    </div>
  )
  

}



export default App
