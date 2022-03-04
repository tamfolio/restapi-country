import React from 'react'

function FlagItem({country}) {
  return (
    <div className='flag-card'>
        <img src={country.flag} alt="" />
        <div className="flag-details">
        <h2>{country.name}</h2>
        <h4>Population: <span>{country.population}</span></h4>
        <h4>Region: <span>{country.region}</span></h4>
        <h4>Capital: <span>{country.capital}</span></h4>
        </div>
    </div>
  )
}

export default  FlagItem