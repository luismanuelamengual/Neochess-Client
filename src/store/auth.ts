import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "auth",
    initialState: {
        authenticated: false
    },
    reducers: {
        authStarted: (state, action) => {
            state.authenticated = true;
        },
        authEnded: (state, action) => {
            state.authenticated = false;
        }
    }
});

export const { authStarted, authEnded } = slice.actions;
export const authReducer = slice.reducer;
