import React, { useState, useEffect } from "react";
import axios from 'axios'

function FlagSingle({match}) {

    const [countries, setCountries] = useState([]);
    useEffect(() => {
        const fetchCountries = async () => {
          const { data } = await axios(
            `https://restcountries.com/v2/all/${match.params.index}`
          );
          console.log('result', data)
          setCountries(data[0]);
        };
    
        fetchCountries();
      },[setCountries, match])
    
  return (
    <div>
        <h1>{countries.name}</h1>
    </div>
  )
}

export default FlagSingle