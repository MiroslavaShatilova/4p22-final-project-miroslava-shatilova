import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const getCategories = createAsyncThunk(
    'category/getCategories',
    async(thunkAPI) => {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const result = await response.json();
        return result;
    }
)

export const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        entities: [],
        loading: false,
    },
    extraReducers: {
      [getCategories.pending]: (state) => {
        state.loading = true;
      },
      [getCategories.fulfilled]: (state, { payload }) => {
        state.loading = false;
        state.entities = payload;
      },
      [getCategories.rejected]: (state) => {
        state.loading = false;
      }
    }
})

export default categorySlice.reducer;
export { getCategories };