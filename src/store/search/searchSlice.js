import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchString : '',
        isEmpty : true

    },
    reducers: {
      setSearchString(state, { payload }) {
        state.searchString = payload;
        if (state.searchString.length > 0) {
          state.isEmpty = false;
        } else {
          state.isEmpty = true;
        }
        
      },
      clearSearchString() {
        return {
            searchString: '',
            isEmpty : true
        };
      },
    }
})

export const { setSearchString, clearSearchString } = searchSlice.actions;
export default searchSlice.reducer;