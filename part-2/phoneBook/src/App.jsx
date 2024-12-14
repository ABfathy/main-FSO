import { useState , useEffect } from 'react'
import Search  from './Search.jsx'
import DisplayAll from './DisplayAll.jsx'
import Display from './Display.jsx'
import personServices from './services/services.js'

const App = () => {

  const [persons, setPersons] = useState([])
  
  
  useEffect(() => {
    personServices
      .getAll()
      .then(personData => {
        setPersons(personData)
      })
  }, [])
  
  return (
    <>
      <h1>Phone book</h1>
      <Search persons={persons}/>
      <Display persons={persons} setPersons={setPersons}/>
      <DisplayAll persons={persons}/>
    </>
  )
}

export default App
