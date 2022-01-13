import { createSlice } from "@reduxjs/toolkit";

export const userslice=createSlice({
    name:"user",
    initialState:{
        user:null,
        loggedin:null,
        signoutcheck:null,
    },
    reducers:{
        login:(state,action)=>{
            state.user=action.payload;
        },
        signin:(state,action)=>{
            state.loggedin=action.payload;
        },

        logout:(state)=>{
            state.user=null;
            state.loggedin=null;
        },
        signout:(state,action)=>{
            state.signoutcheck=action.payload;
        }
    }
});
export const {login,logout,signin,signout} = userslice.actions;
export const selectUser=(state) =>state.user.user;
export const selectpage=(state)=>state.user.loggedin;
export const selectSignout=(state)=>state.user.signoutcheck;
export default userslice.reducer;