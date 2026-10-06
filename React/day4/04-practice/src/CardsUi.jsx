import React, { useState } from 'react'

const CardsUi = ({title , des}) => {

    let [count,SetCount] = useState(0)

    function increment(){
        SetCount(count+1)
    }
  return (
    <div className='card'>
       <h1 > {title} </h1>
      <button onClick={increment}>Increment</button>
      <h1>{count}</h1>
      <p>{des}</p>
      
    </div>
  )
}

export default CardsUi
