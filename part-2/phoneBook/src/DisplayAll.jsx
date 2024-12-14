import personServices from './services/services.js'


const DisplayAll = ({ persons ,setPersons }) => {

    const handleDelete = (person) => {
        
        if(confirm(`Delete ${person.name}`)){
        personServices
        .deletePerson(person)
        .then( () => {
            setPersons(persons.filter(currperson => currperson.id != person.id ))
        })
    
    }

    }

    return(    
        <>
        <h2>Numbers</h2>
        <ul>
        {persons.map(person => 
        <li key={person.id}>
            {person.name} {person.number} 
            <button onClick={() => handleDelete(person)}>delete</button> 
            </li> 
        )}
        </ul>
        </>
    )

}

export default DisplayAll