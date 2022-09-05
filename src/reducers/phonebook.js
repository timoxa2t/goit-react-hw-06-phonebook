const { createAction, createReducer, configureStore } = require("@reduxjs/toolkit");

const ADD_CONTACT = "add_contact"
const REMOVE_CONTACT = "remove_contact"
const SET_CONTACTS = "set_contacts"
const SET_FILTER = "set_filter"



const getSavedContacts = () => {
    const savedContacts = localStorage.getItem("contacts")
    if(savedContacts){
      return JSON.parse(savedContacts)
    }
    else{
      return [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
      ]
    }
  }

const inititalState = {
    contacts: {
      items: getSavedContacts(),
      filter: ''
    }
  }

const addContact = createAction(ADD_CONTACT)
const removeContact = createAction(REMOVE_CONTACT)
const setContacts = createAction(SET_CONTACTS)
const setFilter = createAction(SET_FILTER)


const contactsReducer = createReducer(inititalState, {
    [addContact]: (state, {payload}) => {state.items.push(payload)},
    [removeContact]: (state, {payload}) => {state.items = state.items.filter(item => item.id !== payload)},
    [setContacts]: (state, {payload}) => {state.items = payload},
    [setFilter]: (state, {payload}) => {state.filter = payload}
})

const store = configureStore({
    reducer:{
        contacts: contactsReducer
    },
    preloadedState: inititalState
})

export {addContact, removeContact, setContacts, setFilter, store}