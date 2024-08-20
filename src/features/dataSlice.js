import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}
// setData(prevData => [...prevData, ...dat.items]);
export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    getdata: (state,action) => {
      if (Array.isArray(action.payload)) {
        state.value = [...state.value,...action.payload];
      }
    },
    clearData: (state)=>{
        state.value=[]
    },
    setData: (state,action)=>{
      state.value = [action.payload] 
    },
  },
})

// Action creators are generated for each case reducer function
export const { getdata,clearData,setData} = dataSlice.actions

export default dataSlice.reducer