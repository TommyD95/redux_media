import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {faker} from "@faker-js/faker";

const addUser=createAsyncThunk('users/add', async ()=>{
    const response= await axios.post('http://localhost:3000/users',{
        name:faker.name.fullName(),
        id:Math.round((Math.random()*1000)) 
    }).then((response)=>{
       return response.data;
    });
  return response;  
});

export {addUser};
