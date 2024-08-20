import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'users',
}
// setData(prevData => [...prevData, ...dat.items]);
export const optionSlice = createSlice({
  name: 'option',
  initialState,
  reducers: {
    setOption: (state,action) => {
      state.value = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const {setOption} = optionSlice.actions

export default optionSlice.reducer