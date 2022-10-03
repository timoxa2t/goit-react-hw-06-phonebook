
const { createSlice, combineReducers } = require("@reduxjs/toolkit");


const initialState = {
    contacts: [],
    filter: ''
  }

const contactsSlice = createSlice({
    name: "contacts",
    initialState: initialState.contacts, 
    reducers: {
      addContact(state, {payload}) {state.push(payload)},
      removeContact(state, {payload}) {state = state.filter(item => item.id !== payload)},
      setContacts(state, {payload}) {state = payload},
    }
})

const filterSlice = createSlice({
  name: "filter",
  initialState: initialState.filter, 
  reducers: {
    setFilter(state, {payload}) {state = payload; return state},
  }
})

export const rootReducer = combineReducers({
  contacts: contactsSlice.reducer,
  filter: filterSlice.reducer
})


export const {addContact, removeContact, setContacts, getSavedContacts} = contactsSlice.actions
export const {setFilter} = filterSlice.actions


