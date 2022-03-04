import React from 'react'
import FlagItem from './FlagItem'
import Spinner from './Spinner'

function FlagGrid({countries, output, isLoading}) {
  return isLoading ? <Spinner/> :
    <div className='flags'>
         {output.map((country) => (
            <FlagItem key={country.index} country={country}/>
        ))} 
    </div>
}

export default FlagGrid