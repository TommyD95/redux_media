import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { addUser } from "./thunks/addUser";
import { fetchUsers } from "./thunks/fetchUsers";
import { removeUser } from "./thunks/removeUser";

const userSlice=createSlice({
    name:"users",
    initialState:{
        data:[
           
        ],
        isLoading:false,
        error:null
    },
    reducers:{

    },
    extraReducers(builder){
        builder.addCase(fetchUsers.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(fetchUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=action.payload;
        });
        builder.addCase(fetchUsers.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error;
        });
        builder.addCase(addUser.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(addUser.fulfilled,(state,action)=>{
             state.isLoading=false;
            state.data=[
                ...state.data,action.payload
            ]; 
        });
        builder.addCase(addUser.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error;
        });
        builder.addCase(removeUser.pending,(state,action)=>{
            state.isLoading=true;
        });
        builder.addCase(removeUser.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.data=state.data.filter((user)=>{
                return user.id !== action.payload.id;
            })
            console.log(action);
        });
        builder.addCase(removeUser.rejected,(state,action)=>{
            state.error=action.error;
        });
    }
});

export const userReducer=userSlice.reducer;
