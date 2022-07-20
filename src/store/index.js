import { configureStore } from '@reduxjs/toolkit'
import darkmodeReducer from './darkmodeReducer';


const store = configureStore({
    reducer: { darkmode: darkmodeReducer}
});



export default store; 