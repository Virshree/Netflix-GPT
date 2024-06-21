 import userReducer from "./userSlice";
import { configureStore } from "@reduxjs/toolkit";

  const appStore=configureStore({
    reducer:userReducer
})

export default appStore