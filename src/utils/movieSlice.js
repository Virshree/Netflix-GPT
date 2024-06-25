import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:'movie',
    initialState:{
        playingMoviesData:null,
        trailerVideo:null

    }

    ,
    reducers:{
        addMoviesData:(state,action)=>{
            state.playingMoviesData=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        }
    }
  

})

export const {addMoviesData,addTrailerVideo}=movieSlice.actions;
export default movieSlice.reducer;