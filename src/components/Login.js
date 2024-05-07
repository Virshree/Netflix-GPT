import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidFormData } from "../utils/validate";

const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormData = () => {
    // alert("Email",email.current.value);
    const message = checkValidFormData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);
    console.log(email.current.value, password.current.value);
  };

  const toggleSignupForm = () => {
    setToggleForm(!toggleForm);
  };
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
        onSubmit={(e) => e.preventDefault()}
        className="absolute  mt-24 mx-auto w-3/12 text-white bg-black 
       left-20 right-10 top-10  text-center  bg-opacity-80 rounded-lg min-h-24 "
      >
        <h1 className="ml-6 mt-4  py-6 text-4xl text-left  font-bold">
          {" "}
          {toggleForm ? "Sign In" : "Sign Up"}
        </h1>
        {toggleForm ? (
          ""
        ) : (
          <input
            type="text"
            placeholder="   Full Name"
            className="w-2/3 bg-transparent border text-white text-xl border-white m-4 py-4 rounded-lg "
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="   Email address"
          className="w-2/3 bg-transparent border text-white text-xl border-white m-4 py-4 rounded-lg "
        />

        <input
          ref={password}
          type="password"
          placeholder="  Password"
          className="w-2/3 bg-transparent border text-white text-xl border-white m-4 py-4 rounded-lg "
        />
        <p className="py-2 text-red-600 text-xl">{erroMessage}</p>
        <button
          className="m-4 p-4 bg-red-600 text-xl 
           mx-20 font-bold flex w-2/3 mr-44 cursor-pointer rounded-lg"
          onClick={handleFormData}
        >
          {toggleForm ? "Sign In" : "Sign Up"}
        </button>
        <br />

        <p
          className="text-white    mb-6 pr-12 ml-24 text-lg text-left  cursor-pointer"
          onClick={toggleSignupForm}
        >
          {toggleForm
            ? "New to Netflix ? Sign up now "
            : "Already registered ? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
