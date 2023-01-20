import { createSlice, configureStore, nanoid } from "@reduxjs/toolkit";
import data from '../components/Data/data.json'

const contactSlice = createSlice({
    name: "contacts",
    initialState: data,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.splice(0, 0, action.payload);
            }, prepare(name, number) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.findIndex(task => task.id === action.payload);
            state.splice(index, 1);
        }

    }
});

export const { addContact, deleteContact } = contactSlice.actions;


const filterSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return state = action.payload
        }
    }
});

export const { setFilter } = filterSlice.actions;

export const store = configureStore({
    reducer: {
        contacts: contactSlice.reducer,
        filter: filterSlice.reducer,
    }
});