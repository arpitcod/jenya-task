
const { configureStore } = require("@reduxjs/toolkit");
const userReducer = './userSlice.js'


const store = configureStore({

    reducer:{
        user:userReducer,

    }
})


export default store