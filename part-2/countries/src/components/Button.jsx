import { useState } from "react";

const Button = ( {country}) => {

    let label = 'Show'

    const [toggle , setToggle] = useState(false);

    const handleClick = () => {
    
        setToggle(!toggle)

    }
  
    if(toggle === false) {

        return (
        <button onClick={handleClick}>{toggle ? 'Hide ' : 'Show'}</button>
        )

    }


    return (

        <>
        <button onClick={handleClick}>{toggle ? 'Hide ' : 'Show'}</button>
        <div>
        <h1>{country.name.official}</h1>
        <p>{country.capital}</p>
        <h1>Languages</h1>
        <ul>
        {Object.entries(country.languages).map(([code,language])=>(
        <li key = {`${code}-${language}`}> {language}</li>
        )
        )}
        </ul>
        <h1>Flag</h1>
        <img src={country.flags.png} alt={`${country.name.common} flag`} width="500" />
        </div>
        </>

    

    )

}

export default Button