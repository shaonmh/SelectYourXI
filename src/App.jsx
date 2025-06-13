
import './App.css'
import { BsCoin, BsFlagFill } from "react-icons/bs";



function App() {
  // const [count, setCount] = useState(0)

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
              <img className='w-55 mt-15' src="/src/assets/banner-main.png" alt="banner" />
              <h1 className="text-4xl text-white font-bold my-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
              <h3 className='text-2xl font-medium text-gray-400'>Beyond Boundaries Beyond Limits</h3>
              <div className=" mt-4 relative inline-block  p-2 hover:p-0 hover:border-0 hover:mt-6  transition-all border-2 border-lime-500 rounded-2xl">
                
               <button className='btn bg-lime-300 outline-lime-300 font-extrabold rounded-lg '>Claim Free Credit</button>
              </div>
            </div>
          </div>
          
        </div>  
      </div>
      <div className="available w-5/6 mx-auto flex justify-between mt-15">

        <h3 className='text-3xl font-bold'>Available Players</h3>
        <div className="select">
          <button className="rounded-r-none rounded-lg border-gray-300 border-2 hover:bg-lime-300 active:font-bold">Available</button>
          <button className="rounded-l-none border-l-0 rounded-lg border-gray-300 border-2 hover:bg-lime-300 active:font-bold">Selected</button>
        </div>

      </div>
      <div className="profile-container w-5/6 mx-auto mt-20 mb-30">
        <div className="profile p-4 rounded-2xl border-2 border-gray-200 w-1/3 justify-center items-center flex-col">
          <img className='w-full rounded-2xl' src="https://img.freepik.com/free-photo/cricketer-field-action_53876-63345.jpg" alt="player" />
          <div className='my-5 gap-5 flex flex-col'>
            
            <div className="pl-name flex gap-5">
                <div className="pl-country flex gap-4 ">
                  <svg width="26" height="28" viewBox="0 0 26 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.002 14.5397C17.002 14.5397 20.2718 11.2699 20.2718 7.26985C20.2718 3.26983 17.002 0 13.002 0C9.00194 0 5.73218 3.26983 5.73218 7.26985C5.73218 11.2699 9.002 14.5397 13.002 14.5397Z" fill="#131313" fill-opacity="0.8"/>
                    <path d="M25.4781 20.3493C25.2876 19.8731 25.0337 19.4286 24.7479 19.0159C23.2876 16.8572 21.0337 15.4286 18.494 15.0794C18.1766 15.0477 17.8274 15.1111 17.5734 15.3016C16.24 16.2858 14.6528 16.7937 13.0019 16.7937C11.3511 16.7937 9.76382 16.2858 8.43047 15.3016C8.17648 15.1111 7.82727 15.0159 7.50984 15.0794C4.97015 15.4286 2.68446 16.8572 1.2559 19.0159C0.970188 19.4286 0.716195 19.9049 0.525761 20.3493C0.430544 20.5398 0.462263 20.762 0.55748 20.9525C0.811473 21.3969 1.1289 21.8414 1.41462 22.2223C1.85904 22.8255 2.33525 23.3652 2.87495 23.8731C3.31938 24.3175 3.82731 24.7302 4.33529 25.1429C6.8432 27.016 9.85909 28.0001 12.9702 28.0001C16.0813 28.0001 19.0972 27.0159 21.6051 25.1429C22.113 24.762 22.621 24.3175 23.0655 23.8731C23.5734 23.3652 24.0813 22.8255 24.5258 22.2223C24.8432 21.8096 25.129 21.3969 25.3829 20.9525C25.5416 20.762 25.5733 20.5397 25.4781 20.3493Z" fill="#131313" fill-opacity="0.8"/>
                  </svg>
                  <h3 className="flex items-center gap-1 font-bold text-xl "> Quinton de Kock</h3>
                </div>
            </div>
            <div className="flex items-center justify-between">
              <p className='flex items-center gap-2 text-slate-500 '><BsFlagFill/> South Africa</p>
              
              <a className='bg-slate-100 py-2 px-3 rounded-lg btn text-sm'>All rounder</a>
            </div>
            <hr className='text-slate-300' />
            <div className="rating flex-col">
              <h3 className='text-md font-bold my-3'>Rating</h3>
              <div className=" flex items-center my-3 justify-between"><h4 className='font-semibold'>Left-hand-bat</h4><p>left-hand-bat</p></div>
              <div className=" flex items-center justify-between"><h4 className='font-semibold'>Price: $15000000</h4><a className='btn px-3 py-2 border-1 border-slate-300 rounded-lg text-sm text-slate-500'>Choose Player</a></div>
            </div>
          </div>

          


        </div>
      </div>
      <div className="relative">
      <div className="news-letter-container absolute mt-3/4 bottom-3/4 top-[-250px]  w-5/6 rounded-3xl flex flex-col mx-auto text-center items-center p-20 inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/src/assets/bg-shadow.png')" }}>
        <h2 className='text-3xl  my-5 font-bold'>Subscribe to our Newsletter</h2>
        <h3 className='text-lg font-semibold text-gray-500'>Get the latest updates and news right in your inbox!</h3>
        <div className="sub flex items-center w-1/2 gap-3 py-5 justify-around ">
          <input type="text" className='h-14 appearance-none border border-slate-300 rounded-xl w-full px-10  py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' placeholder='Enter your email'/>
          <a href="#" className=' border-1 border-slate-300 bg-slate-300 px-6 py-4 font-bold rounded-xl h-14 bg-linear-65 from-pink-300 to-yellow-400'>Subscribe</a>
        </div>
      </div>

      <div className="footer p-20 pb-0 text-gray-500   bg-slate-950 mx-auto  ">
        <div className="logo my-20 flex justify-center">
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
      </div>
    </>
  )
}

export default App
