import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}
// setData(prevData => [...prevData, ...dat.items]);
export const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setSearch: (state,action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setSearch} = inputSlice.actions

export default inputSlice.reducer