import { useState } from 'react'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

  const [newName, setNewName] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    const newPerson = { name: newName}     

    const isDuplicated = persons.some(person => JSON.stringify(person) === JSON.stringify(newPerson))

    if(isDuplicated){
      alert(`${newPerson.name} is already in the phonebook`)
      return;
    }
    
    setPersons(persons.concat(newPerson))
    setNewName('')
   }


  const handleChange = (event) => {

    setNewName(event.target.value)

  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
      {persons.map(person=><li key={person.name}>{person.name}</li> )}
      </ul>
    </div>
  )
}
export default App
