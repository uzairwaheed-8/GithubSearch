import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: true,
}

export const darkSlice = createSlice({
  name: 'dark',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggle} = darkSlice.actions

export default darkSlice.reducer