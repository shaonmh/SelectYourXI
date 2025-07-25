
import {  useEffect, useState } from 'react';
import './App.css'
import { BsCoin, BsFlagFill } from "react-icons/bs";
import { MdDeleteForever } from "react-icons/md";

import SinglePlayer from './SinglePlayer';
import Coin from './Coin';





function App() {
  const [players, setPlayers] = useState([])
  
  const [coins, setCoins] = useState(0)


  useEffect(()=>{
    fetch("/player.json")
    .then(res => res.json())
    .then( data =>{
      setPlayers(data)
      
    })
  },[])
  

  const [select, setSelect] = useState([])
  const [activeTab, setActiveTab] = useState('available')

  const handleSelectedPlayer = (pl) => {
   const isExist = select.find(player =>  player.playerId == pl.playerId)

   console.log(pl.biddingPrice);
    if(isExist){
      alert('The Player already Exists')
    }else{

      if(select.length > 5){
        alert('You can not add  more than 6 players')
      }else{

        setSelect([...select, pl])
        
        if(coins < pl.biddingPrice){
          alert('Not enough Money To buy this player')
        }else{
          
        setCoins(coins - pl.biddingPrice)
        }
      }

  }

    




  }
   
  const handleTabChange = btn => {
    setActiveTab(btn)
  }
  // const handleDipslaySelected = () => {
    
  // }

  const playerToShow = 
  activeTab === 'available' ? players : select;

  
  const availableText =  'Available Players';
  const selectText = `Selected Players  (${select.length} /6)` ;


  const tabText =
  activeTab === 'available' ? availableText : selectText;

  

const handleDeletePlayer = (pl) => {

  const newSelect = select.filter(player => player.playerId != pl)
  setSelect(newSelect )
}



// console.log(select);
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
            <li className='flex items-center gap-1'><a href="#" className='btn bg-transparent border text-black border-gray-300 px-5 py-3 rounded-xl flex items-center gap-2'>{coins.toLocaleString()} Coin
                
            
              <BsCoin className='text-yellow-500' /> 
              </a> 
            </li>
          </ul>
        </div>
        
      </div>
      
      <Coin setCoins={setCoins}></Coin>
      <div className="available w-5/6 mx-auto flex justify-between mt-15">

        <h3 className='text-3xl font-bold'> {tabText} </h3>
        <div className="select">
          <button onClick={() => handleTabChange('available')}  className="rounded-r-none rounded-lg border-gray-300 border-2 hover:bg-lime-300 active:font-bold">Available</button>
          <button onClick={() => handleTabChange('selected')}  className="rounded-l-none border-l-0 rounded-lg border-gray-300 border-2 hover:bg-lime-300 active:font-bold">Selected ({select.length})</button>
        </div>

      </div>
      <div className='flex profile-container w-5/6 mx-auto mt-20 mb-30 pb-80' >
        

        {
          
          // playerToShow.map(player => (<SinglePlayer handleSelectedPlayer={handleSelectedPlayer} key={player.playerId} player={player}></SinglePlayer>))
        
          activeTab === 'available' ? (
           <div className=" flex flex-wrap gap-4 ">{playerToShow.map(player => (<SinglePlayer handleSelectedPlayer={handleSelectedPlayer} key={player.playerId} player={player}></SinglePlayer>))}
          </div>) : (
            <ul className='w-full flex flex-col gap-5 '>
              {playerToShow.map(player => (

                <div className="flex border border-gray-50 rounded-lg items-center justify-between p-5">
                  <div className='flex gap-4 items-center'>
                    <div className='profile-img'><img src={player.image} alt="" /></div>
                  <li className='items-center'> 
                    {player.name}
                    <p className='text-sm'>{player.role}</p>
                  </li>
                  </div>

                  <MdDeleteForever onClick={() => handleDeletePlayer(player.playerId)} className='text-2xl cursor-pointer text-red-500'/>
                </div>
              ))}
            </ul>
          )
        }
      
      </div>
      <div className="footer p-20 flex flex-col items-center text-gray-500 relative   bg-slate-950 mx-auto  ">
      <div className="bg-white -top-[25%] h-100 w-5/6 mx-auto px-10 rounded-3xl absolute text-center items-center p-0 ">
        <div className="news-letter-container items-center pb-30  rounded-3xl flex flex-col z-9  inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/bg-shadow.png')" }}>
          <h2 className='text-3xl  mt-10 font-bold'>Subscribe to our Newsletter</h2>
          <h3 className='text-lg font-semibold text-gray-900'>Get the latest updates and news right in your inbox!</h3>
          <div className="sub flex items-center w-1/2 gap-3 py-5 justify-around ">
            <input type="text" className='h-14 appearance-none border border-slate-300 rounded-xl w-full px-10  py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your email'/>
            <a href="#" className=' border-1 border-slate-300 bg-slate-300 px-6 py-4 font-bold rounded-xl h-14 bg-linear-65 from-pink-300 to-yellow-400'>Subscribe</a>
          </div>              
        </div>
      </div>

      
        <div className="logo my-20 pt-30 flex justify-center">
          <img src="/src/assets/logo-footer.png" alt="logo footer" />
        </div>
        <div className="footer-content grid grid-cols-3 gap-20 my-30">
          <div className="about-us">
            <h3>About US</h3>
            <p>We are a passionate team dedicated to providing the best services to our customers.</p>
          </div>
          <div className="quicklinks">
            <h3>Quick Links</h3>
            <ul className='list-disc pl-7 flex flex-col gap-3'>
              <li><a href="#">Home</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">About</a></li>
          
            </ul>
          </div>
          <div className="sub-container">
            <h3>Subscribe</h3>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="sub flex items-center my-5">
              <input type="text" className='h-10 appearance-none leading-2.5 bg-amber-50 rounded-r-none rounded-xl w-2/3 text-xs  px-4  py-2  text-gray-700 focus:outline-none focus:shadow-outline' placeholder='Enter your email'/>
              <a href="#" className=' text-gray-950 leading-6 text-center  w-1/3 bg-slate-300 px-3 py-2 font-bold rounded-l-none rounded-xl h-10 bg-linear-65 from-pink-300 to-yellow-400'>Subscribe</a>
            
            </div>
          </div>
        </div>
        <div className="copy text-center">
          <hr />
          <p className=' py-10'>&copy;2024 Your Company All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}

export default App
