import { createSlice, configureStore, nanoid } from "@reduxjs/toolkit";

const contactSlice = createSlice({
    name: "contacts",
    initialState: [],
    reducers: {
        addContact: {
            reducer(state, action) {
                state.push(action.payload);
            }, prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        }
    },
    deleteContact(state, action) {
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
    }
});

console.log(contactSlice)

export const { addContact, deleteContact } = contactSlice.actions;




export const store = configureStore({
    reducer: {
        contacts: contactSlice.reducer,
    }
});