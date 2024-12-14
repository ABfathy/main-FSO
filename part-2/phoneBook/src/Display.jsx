import { useState } from "react"
import personServices from './services/services.js'

const Display = ({ persons , setPersons }) =>{

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (event) => {
        
        event.preventDefault()

        const newPerson = { 
          name: newName,
          number: newNumber,
         
        }     
        
        if(!newPerson.name || !newPerson.number){
          alert('complete all fields to add to the phonebook')
          return;
        }
        
        const isDuplicated = persons.some(
          person => person.name === newPerson.name && person.number === newPerson.number
        );
        
        if(isDuplicated){
          alert(`${newPerson.name} is already in the phonebook`)
          return;
        }

        
        if(persons.some(person => newPerson.name == person.name)){
          const replace = confirm(`${newPerson.name} is already added to the phonebook, do you want to replace the old number with a new one?`)
          if(replace) {
            const person = persons.find(person => newPerson.name == person.name)
            const changedPerson = {...person, number: newPerson.number}
            personServices
            .updateInformation(changedPerson.id , changedPerson)
            .then(newPerson => {

              setPersons(persons.map(person => person.id === changedPerson.id ? newPerson : person ))
              setNewName('')
              setNewNumber('') 

            })
            return;
          }
        }
        
       
        personServices
        .addPerson(newPerson)
        .then( person => {
          setPersons(persons.concat(person))
          setNewName('')
          setNewNumber('') }
    
        )
        
       }
    
    
      const handleChangeName = (event) => {
    
        setNewName(event.target.value)
    
      }
    
    
      const handleChangeNumber = (event) => {
    
        setNewNumber(Number(event.target.value))
    
      }

      return (
        <>
        <h2>Add new entry: </h2>
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
        </>

      )

}

export default Display