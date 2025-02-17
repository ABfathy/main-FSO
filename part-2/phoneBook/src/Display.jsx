import { useState } from "react"
import personServices from './services/services.js'
import Notification from "./Notification.jsx"
const Display = ({ persons , setPersons }) =>{

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [message , setMessage ] = useState(null)
    const [notificationBoolean , setNotificationBoolean] = useState()

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
              setMessage(`Updated ${newPerson.name}'s contact details`)
              setNotificationBoolean('success') 
              setTimeout(()=>{
                setMessage(null)
                setNotificationBoolean('') 
              }, 5000)

            }).catch(error => {

              setMessage(`Information of ${changedPerson.name} has already been removed`)
              setNotificationBoolean('failure')
              setTimeout(()=>{
                setMessage(null)
                setNotificationBoolean('') 

              }, 5000)

              setPersons(persons.filter(p => p.id !== changedPerson.id))
            
            }

            )
            return;
          }
        }
        
       
        personServices
        .addPerson(newPerson)
        .then( person => {
          setPersons(persons.concat(person))
          setNewName('')
          setNewNumber('') 
          setMessage(`Added ${newPerson.name}'s contact details`)
          setNotificationBoolean('success') 
          setTimeout(()=>{
            setMessage(null)
            setNotificationBoolean('') 
          }, 5000)
        }
    
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
        <Notification message={message} notificationType={notificationBoolean} />
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