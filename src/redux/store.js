import { createSlice, configureStore } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact(state, action) {
            state.push(action.payload)
        },
        deleteContact(state, action) { },
    },
});


const { addContact, deleteContact } = contactSlice.actions;
const contactReducer = contactSlice.reducer;



export const store = configureStore({
    reducer: {
        contacts: contactSlice,
    }
});