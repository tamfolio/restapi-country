import React from 'react'
import FlagItem from './FlagItem'

function FlagGrid({countries}) {
  return (
    <div className='flags'>
         {countries.map((country) => (
            <FlagItem key={country.index} country={country}/>
        ))} 
    </div>
  )
}

export default FlagGrid