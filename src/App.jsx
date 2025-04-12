import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-4/5 mx-auto flex justify-between ">
        <div className="logo">
          <img src="src/assets/logo.png" alt="logo" />
        </div>
        <div className="navbar h-100px ">
          <ul className='flex gap-3 items-center mx-auto'>
            <li><a href="#">home</a></li>
            <li><a href="#">Fixture</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Schedules</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
