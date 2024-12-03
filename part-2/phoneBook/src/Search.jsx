import { useState } from "react"


const Search = ({ persons }) => {

    const [newSearch, setNewSearch] = useState('')
    const [foundPerson , setFoundPerson] = useState({})
    const [searchBool , setSearchBool] = useState(false)

    const handleChangeSearch = (event) => {

      setNewSearch(event.target.value)
      setSearchBool(false)
  
    }

    const searchPerson = () => {

      const foundSearch = persons.find(person => person.name.toLowerCase() === newSearch.toLowerCase() || person.number === newSearch );
      setSearchBool(true)
      if(!foundSearch){
        setSearchBool(false)
      }
      setFoundPerson(foundSearch)
      setNewSearch('')
    }

    return(

        <>
        <h1>Search names: </h1>
        <input value={newSearch} onChange={handleChangeSearch}/>
        <button onClick={searchPerson}>search</button>
        <div>{searchBool ? `${ ' Name: ' + foundPerson.name} ${ ' Number: ' + foundPerson.number}` : 'Not found in PhoneBook'}</div>
        </>
    )

}

export default Search