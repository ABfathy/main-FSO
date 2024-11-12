import { useState } from 'react'


const Display = ({vote , anecdotes}) => {
  let max = vote[0]
  let curr = 0
  let hasVoted = false
  for(let i = 0 ; i < anecdotes.length;i++){

    if(vote[i] > 0){
      hasVoted = true
    }

    if(max < vote[i]){

      max = vote[i]
      curr = i
      
    
    }

  }
  if(!hasVoted){

    return ( <h1>No votes submitted yet</h1>)
    
  } 

  return(

    <>
    <h1>Anecdote with the most votes numbered at {max}</h1>
    <h2>{anecdotes[curr]}</h2>
    </>

  )    
 

}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  
  const arr = Array(8).fill(0)
  const [selected, setSelected] = useState(0)
  const [vote , setVote] = useState(arr)
  
  

  const handleClick = () =>{

    const rand = Math.floor(Math.random() * 8)
    setSelected(rand)


  }

  const handleVote = () => {

    const copy = [...vote]
    copy[selected]+=1
    setVote(copy)
  
  }

  return (
    <div>
      <h1>
        {anecdotes[selected]}
      </h1>
      <h2>Has {vote[selected]} votes</h2>
      <button onClick={handleClick}>Update quote</button>
      <button onClick={handleVote}>vote</button>
      <Display vote={vote} anecdotes={anecdotes} ></Display>
      
    </div>
  )
}


export default App
