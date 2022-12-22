import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { faker } from "@faker-js/faker";

const albumsApi=createApi({
    reducerPath:"albums",
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3000',
    }),
    endpoints(builder){
        return {
            fetchAlbums:builder.query({
                providesTags:(result,error,user)=>{
                    return [{type:'Album',id:user.id}];
                },
                query:(user)=>{
                    
                    return {
                        url:`albums/`,
                        params:{
                            userId:user.id,
                        },
                        method:'GET'
                    }
                }
            }),
            addAlbum:builder.mutation({
                invalidatesTags:(result,error,user)=>{
                    return [{type:'Album', id:user.id}];
                },
                query:(user)=>{ 
                    return{
                        url:'/albums',
                        method:'POST',
                        body:{
                            userId:user.id,
                            title:faker.commerce.productName()
                        }
                    }

                }
            }),
            removeAlbum:builder.mutation({
                invalidatesTags:(result,error,album)=>{
                    return [{type:'Album',id:album.userId}];
                },
                query:(album)=>{
                    return {
                            method:'DELETE',
                            url:`/albums/${album.id}`,
                    }
                }
            })
        }
    }
})

export const {useFetchAlbumsQuery,useAddAlbumMutation,useRemoveAlbumMutation}=albumsApi;
export {albumsApi};