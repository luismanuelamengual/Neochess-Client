import {createSlice} from "@reduxjs/toolkit";

const slice = createSlice({
    name: "connection",
    initialState: {
        connected: false
    },
    reducers: {
        connected: (state, action) => {
            state.connected = true;
        },
        disconnected: (state, action) => {
            state.connected = false;
        }
    }
});

export const { connected, disconnected } = slice.actions;
export const connectionReducer = slice.reducer;