import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    formValue: '',
}

export const formSlice = createSlice({
    name: 'formValue',
    initialState,
    reducers: {
      setformValue: (state, action) => {
        state.formValue = action.payload
      }
    },
})

export const { setformValue } = formSlice.actions

export default formSlice.reducer