import { useState , useEffect } from 'react'
import axios from 'axios'
import Button from './components/Button'


function App() {
  const [value, setValue] = useState('')
  const [countries, setCountries] = useState([])
  const [unfiltered, setUnfiltered ] = useState([])
  const [capital, setCapital] = useState('')
  const [weather, setWeather] = useState([])
  const api_key = import.meta.env.VITE_WEATHER_KEY

  useEffect(()=>{

    
      axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => { 
        setUnfiltered(response.data)
      })

  },[])

  useEffect(()=>{

    if(countries.length===1){
      setCapital(countries[0].capital)
    }

  },[countries])


  useEffect(()=>{

    if (capital){

      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}`)
      .then( response =>{

        setWeather(response.data)

      })


  }} , [capital])
  

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
      countries.length === 1 ? 
      countries.map( country =><div key={country.cca3}>
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
        {weather.main && weather.weather ? (
        <>
        <p>Weather in {capital}</p>
        <div>
        <p>Current Temperature: {weather.main.temp} Kelvin</p>
        <p>Feels like: {weather.main.feels_like} Kelvin</p>
        <p>Visibility: {weather.visibility} meters</p>
        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}  width="100"/>
        <p>Wind: {weather.wind.speed} m/s</p>
        </div>
        </> 
        ) : (<p>loading weather data....</p>)}
        </div>
        
        ):
        countries.map(country => <li key={country.cca3} >{country.name.common} <Button  country={country} ></Button> </li> )
      }
      </div>
    </>
    
    
  )
}

export default App
