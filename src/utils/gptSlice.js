import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState: {
        showGptSerach:false,
    },
    reducers:{
        addToggleGptSearch:(state)=>{
            state.showGptSerach=!state.showGptSerach;
        }
    }
})

export const {addToggleGptSearch}=gptSlice.actions;
export  default gptSlice.reducer;