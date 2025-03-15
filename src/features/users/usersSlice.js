import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id:'0', name: 'Mujtaba'},
    {id:'1', name: 'Afnan'},
    {id:'2', name: 'Abeeha'},
]


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{}
})


export const selectAllUsers = (state) => state.users

export  default userSlice.reducer