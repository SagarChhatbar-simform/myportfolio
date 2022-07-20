import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {darkmode: false };

const darkmodeSlice = createSlice({
    name: 'darkmode',
    initialState: initialCounterState,
    reducers: {
        toggleDarkmode(state) {
            state.darkmode = !state.darkmode;
        },
    }
});

export const darkmodeActions = darkmodeSlice.actions;


export default darkmodeSlice.reducer;