import { createSlice } from "@reduxjs/toolkit";

const initialState = [{
    id:"1",
    name:"Sonal",
    age:24,

}]

export const UsersSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        }
    }
})

export const {addUser,deleteUser} = UsersSlice.actions;



export default UsersSlice.reducer