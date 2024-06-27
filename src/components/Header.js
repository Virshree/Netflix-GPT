import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { addToggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store?.user);
  const showGptSearch=useSelector(store=>store.gpt?.showGptSerach);

  function handleSignOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  }

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //toggle gpt search
    dispatch(addToggleGptSearch());
  };
  const handleChangeLang = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute px-8 py-2  flex justify-between bg-gradient-to-b from-black shadow-xl w-full  z-10">
      <img src={LOGO} alt="logo" className="w-44" />

      {user && (
        <div className="flex  p-2 m-2">
         { showGptSearch && <select
            className="bg-gray-800 text-white text-xl  m-2 mx-4  px-4"
            onChange={handleChangeLang}
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.identifier} value={lang.identifier}>
                {lang.name}
              </option>
            ))}
          </select>}
          <button
            className="bg-purple-800 font-bold text-xl text-white mx-4 px-4 py-2  
          rounded-lg"
            onClick={handleGptSearchClick}
          >
           {showGptSearch ? "Home page" : "GPT Search"}
          </button>
          <img
            src={user?.photoURL}
            className="w-10 h-10 m-2  cursor-pointer "
            alt="usericon"
          />
          <button
            className="text-white font-bold text-xl m-2 p-2"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
