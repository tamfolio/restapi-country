import React, { useState, useEffect} from "react";
import axios from 'axios'
import { useParams } from 'react-router-dom'


function FlagSingle({match}) {

    const [countries, setCountries] = useState([]);
    const { name } = useParams()
    useEffect(() => {
        const fetchCountries = async () => {
          const { data } = await axios(
            `https://restcountries.com/v2/all/${match.params.name}`
          );
          console.log('result', data)
          setCountries(data[0]);
        };
    
        fetchCountries();
      },[setCountries, match])
    
  return (
    <div>
        <h1>{name}</h1>
       
    </div>
  )
}

export default FlagSingle