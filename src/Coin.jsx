
const Coin = ({setCoins}) => {

    const addCoins = () => {

        setCoins(current => current + 6000000)

        
        
    }

    return (
    <div className="banner relative overflow-hidden rounded-2xl w-5/6 mx-auto  h-130 ]" >
        <div className="absolute bg-black inset-0" style={{ backgroundColor: 'black' }}>
            <div className='absolute inset-0 bg-cover bg-center ' style={{ backgroundImage: "url('/src/assets/bg-shadow.png')" }}>
              <div className=" flex flex-col justify-center items-center">
                <img className='w-55 mt-15' src="/src/assets/banner-main.png" alt="banner" />
                <h1 className="text-4xl text-white font-bold my-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                <h3 className='text-2xl font-medium text-gray-400'>Beyond Boundaries Beyond Limits</h3>
                <div className=" mt-4 relative inline-block  p-2 hover:p-0 hover:border-0 hover:mt-6  transition-all border-2 border-lime-500 rounded-2xl">
                  
                 <button onClick={addCoins} className='btn bg-lime-300 outline-lime-300 font-extrabold rounded-lg '>Claim Free Credit</button>
                 
                </div>
              </div>
            </div>
            
        </div>  
    </div>
    );
};

export default Coin;