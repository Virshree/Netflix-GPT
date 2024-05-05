import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" ">
      <div className="absolute w-52 bg-gradient-to-b from black px-2 py-2">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <Header />

      <form
        className="absolute  mt-24 mx-auto w-3/12 text-white bg-gradient-to-r from-cyan-600 to-indigo-700  
       left-20 right-10 top-10  text-center   "
      >
        <h1 className="m-2 p-4 text-3xl text-left mr-36 font-bold">Sign In</h1>
        <input
          type="email"
          placeholder="Email or mobile number"
          className="w-2/3 bg-transparent border text-white text-xl border-white m-4 p-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-2/3 bg-transparent border text-white text-xl border-white m-4 p-4"
        />
        <button className="m-4 p-4 bg-red-700 text-xl   text-center  mx-20 font-bold flex w-2/3  mr-44 cursor-pointer">
          Sign In
        </button>
        <br/>
        <p className=" m-0 text-center ">   OR</p>
        <button className="m-4 p-4 mx-20  bg-cyan-600 hover:bg-gray-400 text-center font-bold text-xl flex w-2/3  mr-44 cursor-pointer">Use a sign-in code</button>
     
      <Link to="/browse" className="text-white text-xl">Forgot password?</Link>
      <br/>
      <br/>
        <input type="checkbox" value="Remember me"  name="Remember me" className="text-left "/>
        <label className="text-white mr-44 text-xl text-left">Remember me</label>
        <p className="text-white mr-44 ml-12 text-lg text-left"> New to Netflix ? 
        <Link to="/browse" className="text-l text-white font-bold ">Sign up now</Link></p>
      </form>
    </div>
  );
};

export default Login;
