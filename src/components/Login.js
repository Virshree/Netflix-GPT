import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidFormData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { BgImg, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [toggleForm, setToggleForm] = useState(true);
  const [erroMessage, setErrorMessage] = useState(null);
  const dispatch=useDispatch();


  const name=useRef(null);
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

    if(message) return ;
      //create a new user 

      ///signin /signup login logic
      if(!toggleForm){
        //sign up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
           photoURL:USER_AVATAR
        }).then(() => {
          // Profile updated!
          const {uid,email,displayName,photoURL}=auth.currentUser;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))

          
        }).catch((error) => {
          // An error occurred
            setErrorMessage(error.message)
        });
     
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + "-"+ errorMessage);
  });
      }
      else{
        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode +" - "+ errorMessage)
        });

      }

  };

  const toggleSignupForm = () => {
    setToggleForm(!toggleForm);
  };
  return (
    <div className=" ">
         <div className=" absolute opacity-100">
         <img
        src={BgImg}
        alt="bgimg"
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
            ref={name}
            className="w-2/3 
            bg-transparent border text-white text-xl border-white m-4 px-4 py-4 rounded-lg "
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="   Email address"
          className="w-2/3 bg-transparent border text-white text-xl border-white m-4 
          px-4 py-4 rounded-lg "
        />

        <input
          ref={password}
          type="password"
          placeholder="  Password"
          className="w-2/3 bg-transparent border text-white text-xl border-white m-4 px-4  py-4 rounded-lg "
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
