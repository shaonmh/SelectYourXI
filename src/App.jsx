import { useState } from 'react'
import './App.css'
import { BsCoin } from "react-icons/bs";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="w-5/6 mx-auto flex justify-between items-center h-[100px]">
        <div className="logo">
          <img src="src/assets/logo.png" alt="logo" className="h-[60px] w-auto" />
        </div>
        <div className="navbar h-150px ">
          <ul className='flex gap-8 items-center capitalize text-gray-500 justify-items-stretch'>
            <li><a href="#">home</a></li>
            <li><a href="#">Fixture</a></li>
            <li><a href="#">Teams</a></li>
            <li><a href="#">Schedules</a></li>
            <li className='flex items-center gap-1'><a href="#" className='btn bg-transparent border text-black border-gray-300 px-5 py-3 rounded-xl flex items-center gap-2'>0 Coin
                
            
              <BsCoin className='text-yellow-500' /> 
              </a> 
            </li>
          </ul>
        </div>
        
      </div>
      <div className="banner relative overflow-hidden rounded-2xl w-5/6 mx-auto  h-130 ]" >
      <div className="absolute bg-black inset-0" style={{ backgroundColor: 'black' }}>
          <div className='absolute inset-0 bg-cover bg-center ' style={{ backgroundImage: "url('/src/assets/bg-shadow.png')" }}>
            <div className=" flex flex-col justify-center items-center">
              <img className='w-55 mt-15' src="/src/assets/banner-main.png" alt="" />
              <h1 className="text-4xl text-white font-bold my-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
              <h3 className='text-2xl font-medium text-gray-400'>Beyond Boundaries Beyond Limits</h3>
              <div className=" mt-4 relative inline-block  p-2 hover:p-0 hover:border-0 hover:mt-6  transition-all border-2 border-lime-500 rounded-2xl">
                
               <button className='btn bg-lime-300 outline-lime-300 font-extrabold rounded-2xl '>Claim Free Credit</button>
              </div>
            </div>
          </div>
          
        </div>  
      </div>
    </>
  )
}

export default App
