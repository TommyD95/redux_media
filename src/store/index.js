import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slices/usersSlice";

export const store=configureStore({
    reducer:{
        users:userReducer
    }
})

export * from './slices/thunks/fetchUsers';
export * from './slices/thunks/addUser';
export * from './slices/thunks/removeUser';

