import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-4/5 mx-auto flex justify-between items-center h-[100px]">
        <div className="logo">
          <img src="src/assets/logo.png" alt="logo" className="h-[60px] w-auto" />
        </div>
        <div className="navbar h-100px ">
          <ul className='flex gap-8 items-center capitalize text-gray-500 '>
            <li><a href="#">home</a></li>
            <li><a href="#">Fixture</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Schedules</a></li>
            <li><a href="#" className='btn bg-transparent border text-black border-gray-500 px-4 py-2 rounded'>0 Coin</a></li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default App
