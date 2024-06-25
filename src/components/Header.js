import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {

const navigate=useNavigate();
const user=useSelector((store)=>store?.user)

  function handleSignOut(){
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  const dispatch=useDispatch()
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
       
       
        const {uid,email,displayName,photoURL}=user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
          
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return() =>unsubscribe();
  },[])
  return (
    <div className="absolute px-8 py-2  flex justify-between bg-gradient-to-b from-black shadow-xl w-full  z-10">
  
    <img
      src={LOGO}
      alt="logo"
      className="w-44"
    />
   
   {user && (
    <div
       className="flex  p-2 m-2">
            
      <img 
       src={user?.photoURL} 
      className="w-10 h-10 m-2  cursor-pointer "
     alt="usericon" />
      <button className="text-white font-bold text-xl m-2 p-2"
        onClick={handleSignOut}>Sign Out</button>
      </div>
   )} 

   
  </div>
  );
};

export default Header;
