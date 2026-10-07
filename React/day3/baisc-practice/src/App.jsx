import React, { use } from 'react'
import Person from './person'
import Product from './Product'


const App = () => {

  return (
    <>
    <header className='flex bg-lime-200 items-center  justify-between py-3 px-7'>
      <div className="nav_icon">
        <h1>Icon</h1>
      </div>
      <div className="nav_centre">
        <a href="">Home</a>
          <a href="">Features</a>
            <a href="">About</a>
              <a href="">Contact US</a>
      </div>
      <div className="navbarbtn">
        <button>Join WishList</button>
      </div>
    </header>
    </>
  )
}

export default App
