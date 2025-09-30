import React from "react";
import { BsFlagFill } from "react-icons/bs";
import { ToastContainer } from "react-toastify";

const SinglePlayer = ({ player, handleSelectedPlayer }) => {
  return (
    <div className="md:flex-[1_1_30%] md:min-w-[300px] profile p-1 md:p-4 rounded-2xl border-2 border-gray-200 justify-between items-center md:items-stretch flex flex-col">
      <img
        className="w-full h-30 md:h-72 object-cover rounded-xl "
        src={player.image}
        alt="player"
      />
      <div className=" my-2 md:my-5 md:gap-5 flex flex-col">
        <div className="pl-name flex gap-1 md:gap-5">
          <div className="pl-country pl-1 flex gap-1 md:gap-4 ">
            <svg
              className="h-3 w-3 mt-1 md:h-6 md:w-7"
              width="26"
              height="28"
              viewBox="0 0 26 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.002 14.5397C17.002 14.5397 20.2718 11.2699 20.2718 7.26985C20.2718 3.26983 17.002 0 13.002 0C9.00194 0 5.73218 3.26983 5.73218 7.26985C5.73218 11.2699 9.002 14.5397 13.002 14.5397Z"
                fill="#131313"
                fillOpacity="0.8"
              />
              <path
                d="M25.4781 20.3493C25.2876 19.8731 25.0337 19.4286 24.7479 19.0159C23.2876 16.8572 21.0337 15.4286 18.494 15.0794C18.1766 15.0477 17.8274 15.1111 17.5734 15.3016C16.24 16.2858 14.6528 16.7937 13.0019 16.7937C11.3511 16.7937 9.76382 16.2858 8.43047 15.3016C8.17648 15.1111 7.82727 15.0159 7.50984 15.0794C4.97015 15.4286 2.68446 16.8572 1.2559 19.0159C0.970188 19.4286 0.716195 19.9049 0.525761 20.3493C0.430544 20.5398 0.462263 20.762 0.55748 20.9525C0.811473 21.3969 1.1289 21.8414 1.41462 22.2223C1.85904 22.8255 2.33525 23.3652 2.87495 23.8731C3.31938 24.3175 3.82731 24.7302 4.33529 25.1429C6.8432 27.016 9.85909 28.0001 12.9702 28.0001C16.0813 28.0001 19.0972 27.0159 21.6051 25.1429C22.113 24.762 22.621 24.3175 23.0655 23.8731C23.5734 23.3652 24.0813 22.8255 24.5258 22.2223C24.8432 21.8096 25.129 21.3969 25.3829 20.9525C25.5416 20.762 25.5733 20.5397 25.4781 20.3493Z"
                fill="#131313"
                fillOpacity="0.8"
              />
            </svg>
            <h3 className="flex items-center gap-1 font-bold text-sm md:text-xl ">
              {" "}
              {player.name.substring(0, 15) + ".."}
            </h3>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p className="flex text-xs md:text-base items-center gap-1 text-slate-500 ">
            <BsFlagFill className="w-5 pl-1" /> {player.country}
          </p>

          <a className="bg-slate-100 my-1 py-1 px-2 rounded md:py-2 md:px-3 md:rounded-lg md:btn text-xs md:text-sm">
            {player.role.substring(0, 10)}
          </a>
        </div>
        <hr className="text-slate-300" />
        <div className="rating text-left flex-col p-1 flex ">
          <h3 className="text-md font-bold my-3 md:flex hidden">Rating</h3>
          <div className=" flex items-center my-1 text-xs md:text-base md:gap-3  md:my-3 justify-between">
            <h4 className="font-semibold ">{player.battingType}</h4>
            <p className="text-right">{player.bowlingType}</p>
          </div>
          <div className=" flex flex-col md:flex-row md:justify-between text-xs md:text-base text-center mt-auto">
            <h4 className="font-semibold my-1">
              Price: ${player.biddingPrice}
            </h4>
            <a
              onClick={() => handleSelectedPlayer(player)}
              className="btn text-center md:text-right p-2 text-xs md:text-sm md:px-3 md:py-2 border-1 border-slate-300 rounded-lg text-slate-500"
            >
              Choose Player
            </a>
          </div>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default SinglePlayer;
