import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    search: [],
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      setSearchResult: (state, action) => {
        state.search = action.payload
      }
    },
})

export const { setSearchResult } = searchSlice.actions

export default searchSlice.reducer