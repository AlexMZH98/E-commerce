import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const getSuggestions = createAsyncThunk("suggestions/getSuggestions", async(id = "") => {
    // return fetch("https://digitalamazonproject.azurewebsites.net/api/product/latestproducts")
    return fetch(`https://digitalinstitute-amazon.azurewebsites.net/api/product/products/${id}`)
    .then(res => res.json())
})

const SuggestionsSlice = createSlice({
    name:"suggestions",
    initialState:{
        suggestionsData:[],
        suggestionsError: false,
    },
    extraReducers:{
        [getSuggestions.pending]: (state) => {
            state.suggestionsError = false
        },
        [getSuggestions.fulfilled]:(state,action) => {
            state.suggestionsData = action.payload
        },
        [getSuggestions.rejected]:(state) => {
            state.suggestionsError = true
        }
    }
})

export default SuggestionsSlice.reducer