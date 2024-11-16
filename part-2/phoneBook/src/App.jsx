import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , number: '01008983902'}
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()

    const newPerson = { 
      name: newName,
      number: newNumber
    }     

    const isDuplicated = persons.some(person => JSON.stringify(person) === JSON.stringify(newPerson))

    if(isDuplicated){
      alert(`${newPerson.name} is already in the phonebook`)
      return;
    }
    
    if(!newPerson.name || !newPerson.number){
      alert('complete all fields to add to the phonebook')
      return;
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
    
   }


  const handleChangeName = (event) => {

    setNewName(event.target.value)

  }


  const handleChangeNumber = (event) => {

    setNewNumber(Number(event.target.value))

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChangeName}/>
        </div>
        <div>
          number: <input type="number" value={newNumber} onChange={handleChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person=><li key={person.name}>{person.name} {person.number}</li> )}
      </ul>
    </div>
  )
}
export default App
