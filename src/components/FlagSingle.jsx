import React, {useState, useEffect} from 'react'
import axios from 'axios'


function FlagSingle({match}) {
  const [activeCountry, setActiveCountry] = useState([])
  // console.log(match);

  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await axios(
        `https://restcountries.com/v2/name/${match.params.name}`
      );
      // console.log(result.data)
      // console.log("result", data);
      setActiveCountry(data[0]);

    };

    fetchCountries();
  },[setActiveCountry, match])

  return (
    <div className="single-card">
      <div className="back-button"></div>
      <div className="single-box">
          <img src={activeCountry.flag} alt="" />
          <div className="single-details">
              <h1>{activeCountry.name}</h1>
              <h4>{activeCountry.nativename}</h4>  
              <h4>Population: <span>{activeCountry.population}</span></h4>
              <h4>Region: <span>{activeCountry.region}</span></h4>
              <h4>Sub region: <span>{activeCountry.subregion}</span></h4>
              <h4>Capital: <span>{activeCountry.capital}</span></h4>
              <h4>Currencies:<span>{activeCountry && activeCountry.currencies && Array.isArray(activeCountry.currencies) ?
               activeCountry.currencies.map(data=>data.name): ''}</span></h4>
               <h4>languages:<span>{activeCountry && activeCountry.languages && Array.isArray(activeCountry.languages) ?
               activeCountry.languages.map(data=>data.name).toString(): ''}</span></h4>
               
             
          </div>
      </div>
      </div>
  )
}

export default FlagSingle

