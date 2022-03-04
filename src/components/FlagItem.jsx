import React from 'react'
import { Link } from 'react-router-dom'

function FlagItem({country}) {
  return (
    <Link to={`/${country.index}`}>
    <div className='flag-card'>
        <img src={country.flag} alt="" />
        <div className="flag-details">
        <h2>{country.name}</h2>
        <h4>Population: <span>{country.population}</span></h4>
        <h4>Region: <span>{country.region}</span></h4>
        <h4>Capital: <span>{country.capital}</span></h4>
        </div>
    </div>
    </Link>
  )
}

export default  FlagItem