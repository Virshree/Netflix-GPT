import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

const navigate=useNavigate();
const user=useSelector((store)=>store?.user)
console.log(user)

  function handleSignOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
        navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="absolute px-8 py-2  flex justify-between bg-gradient-to-b from-black shadow-xl w-full  z-10">
  
    <img
      src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
      alt="logo"
      className="w-44"
    />
   
    (<div
       className="flex  p-2 m-2">
            
      <img 
       src={user?.photoURL} 
      className="w-10 h-10 m-2  cursor-pointer "
     alt="usericon" />
      <button className="text-white font-bold text-xl m-2 p-2"
        onClick={handleSignOut}>Sign Out</button>
      </div>)
  
   
     

   
  </div>
  );
};

export default Header;
