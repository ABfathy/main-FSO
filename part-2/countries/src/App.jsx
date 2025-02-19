import { useState , useEffect } from 'react'
import axios from 'axios'
import Button from './components/Button'


function App() {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [unfiltered, setUnfiltered ] = useState([])

  
  useEffect(()=>{

    
      axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => { 
        setUnfiltered(response.data)
      })

  },[])
  
  useEffect(()=>{

    if(unfiltered.length > 0){
    
      const searchList = unfiltered.filter( country  => country.name.common.toLowerCase().includes(value.toLowerCase()) )

      setCountries(searchList) 
    
    }


  },[value , unfiltered ])


  const handleChange = (event) => {
    setValue(event.target.value)

  }




  return (
    <>
    find countries <input type="text" value={value} onChange={handleChange}/>
      <div>
      {countries.length > 10 ? 'please specify your search more': 
      countries.length === 1 ? countries.map( country =><div key={country.cca3}>

        <h1>{country.name.official}</h1>
        <p>{country.capital}</p>
        <h1>Languages</h1>
        <ul>
        {Object.entries(country.languages).map(([code,language])=>(
          <li key={`${country.cca3}-${code}`}> {language}</li>
        )
        )}
        </ul>
        <h1>Flag</h1>
        <img src={country.flags.png} alt={`${country.name.common} flag`} width="500" />
        </div>):
        countries.map(country => <li key={country.cca3} >{country.name.common} <Button  country={country} ></Button> </li> )
      }
      </div>
    </>
    
    
  )
}

export default App
