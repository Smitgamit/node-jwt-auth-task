import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    email: '',
    mobileNo: '',
    profile: '',
    country: ''
}


const authSlice = createSlice({
    name: 'authentication',
    initialState,
    reducers: {

    }
})

export default authSlice.reducer;