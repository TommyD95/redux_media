import { faker } from "@faker-js/faker";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const photoApi=createApi({
    reducerPath:'photos',
    baseQuery: fetchBaseQuery({
        baseUrl:'http://localhost:3000'
    }),
    endpoints(builder){
        return {
            fetchPhotos:builder.query({
                providesTags:(result,error,album)=>{
                    return [{type:'Photos',id:album.id}];
                },
                query:(album)=>{
                    return {
                        url:'/photos',
                        params:{
                            albumId: album.id,
                        },
                        method:'get',
                    };
                   
                }
            }),
            addPhoto:builder.mutation({
                invalidatesTags:(result,error,album)=>{
                    return [{type:'Photos', id:album.id}];
                },
                query:(album)=>{
                    return {
                        method:'POST',
                        url:'/photos',
                        body:{
                            albumId:album.id,
                            url:faker.image.abstract(150,150,true),
                        }
                    }

                }
            }),
            removePhoto:builder.mutation({
                invalidatesTags:(result,error,photo)=>{
                    return [{type:'Photos', id:photo.albumId}];
                },
                query:(photo)=>{
                    return {
                        method:'DELETE',
                        url:`/photos/${photo.id}`
                    }
                }
            })
        }
    }
})

export const {useAddPhotoMutation,useFetchPhotosQuery,useRemovePhotoMutation}=photoApi;

export {photoApi};