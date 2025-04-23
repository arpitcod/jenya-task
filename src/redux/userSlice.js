"use client"
const { createSlice } = require("@reduxjs/toolkit");


const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        tokem:null,
        error:null
    },

    reducers:{
       setUserData:(state,action) =>{
            state.user = action.payload.user,
            state.tokem = action.payload.token,
            state.error = null

       },
       setError :(state,action) =>{
         state.error = action.payload
       },
       setLogout:(state) =>{
        state.user=null,
        state.tokem=null,
        state.error=null
       }
    }
})


export const {setUserData} = userSlice.actions

export default userSlice.reducer