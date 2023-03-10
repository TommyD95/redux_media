import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { albumsApi } from "./apis/albumsApi";
import { photoApi } from "./apis/photoApi";
import { userReducer } from "./slices/usersSlice";

export const store=configureStore({
    reducer:{
        users:userReducer,
        albums:albumsApi.reducer,
        photos:photoApi.reducer
    },
    middleware:()=>{
        return getDefaultMiddleware().concat(albumsApi.middleware).concat(photoApi.middleware);
    }
});

setupListeners(store.dispatch);

export * from './slices/thunks/fetchUsers';
export * from './slices/thunks/addUser';
export * from './slices/thunks/removeUser';
export {useFetchAlbumsQuery,useAddAlbumMutation, useRemoveAlbumMutation} from "./apis/albumsApi";
export {useAddPhotoMutation,useRemovePhotoMutation,useFetchPhotosQuery} from './apis/photoApi';
