import { useState } from 'react'
import Search  from './Search.jsx'
import DisplayAll from './DisplayAll.jsx'
import Display from './Display.jsx'


const App = () => {

  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '01008983902' , id: '0'},
    { name: 'Ada Lovelace', number: '39-44-5323523' , id : '1'},
    { name: 'Dan Abramov', number: '12-43-234345' , id : '2' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' , id : '3'}
  ]) 
 
  return (
    <>
      <h1>Phonebook</h1>
      <Search persons={persons}/>
      <Display persons={persons} setPersons={setPersons}/>
      <DisplayAll persons={persons}/>
    </>
  )
}

export default App
