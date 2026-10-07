import React from 'react'
import Cards from './components/Cards'

const App = () => {
  return (
    <div className='grid grid-cols-4 gap-8'>

      <Cards/>
            <Cards/>

      <Cards/>
      <Cards/>

    </div>
  )
}

export default App
