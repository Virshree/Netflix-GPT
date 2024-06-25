import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div
      className=" w-screen aspect-video 
    pt-[20%] px-24  text-xl  absolute text-white bg-gradient-to-r from-black"
    >
      <h1 className="text-6xl font-bold ">{title}</h1>
      <p className="text-xl py-6 w-1/4">{overview}</p>
      <div>
        <button
          className="bg-white text-black m-2 p-4 text-xl font-bold
             rounded-xl  mx-2 px-13  hover:bg-opacity-50 w-40"
        >
          ▶️ Play
        </button>
        <button
          className="bg-gray-500 text-white hover:bg-opacity-100  text-xl bg-opacity-50 rounded-xl mx-2 
             p-4 px-18"
        >
          {" "}
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
