const { configureStore } = require("@reduxjs/toolkit");
const { default: UsersList } = require("../components/UsersList");
const { userReducer } = require("./slices/usersSlice");

const store=configureStore({
    reducer:{
        users:userReducer
    }
})

