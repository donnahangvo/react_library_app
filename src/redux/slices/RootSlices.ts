import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        first_name: "First Name",
        last_name: "Last Name",
        book_title: "Book Title",
        book_length: "Book Length",
        book_type: "Book Type",
        language: "Language",
        isbn: "ISBN Number",
    },

    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseFirst: (state, action) => { state.first_name = action.payload}, // All we are doing is setting the input to the state.name
        chooseLast: (state, action) => { state.last_name = action.payload},
        chooseTitle: (state, action) => { state.book_title = action.payload},
        chooseLength: (state, action) => { state.book_length = action.payload},
        chooseType: (state, action) => { state.book_type = action.payload},
        chooseLanguage: (state, action) => { state.language = action.payload},
        chooseISBN: (state, action) => { state.isbn = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseFirst, chooseLast, chooseTitle, chooseLength, chooseType, chooseLanguage, chooseISBN } = rootSlice.actions