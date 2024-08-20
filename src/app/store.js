import { configureStore } from '@reduxjs/toolkit'
import darkReducer from '../features/darkSlice'
import dataReducer from '../features/dataSlice'
import  optionReducer from '../features/optionSlice'
import inputReducer from '../features/inputSlice'
// import storage from 'redux-persist/lib/storage';
// import { persistReducer, persistStore } from 'redux-persist';
// import thunk from 'redux-thunk';

export const store = configureStore({
  reducer: {
    dark: darkReducer,
    data: dataReducer,
    option: optionReducer,
    input: inputReducer,
  },
})