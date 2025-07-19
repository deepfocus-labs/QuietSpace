import {createSlice} from '@reduxjs/toolkit'


const userState = {
    status : false,
    userData: null 
}

const authSlice = createSlice({
    name : "auth",
    initialState : userState,
    reducers : {
        login : (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
    }
})

export const {login} = authSlice.actions;

export default authSlice.reducer;