import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from 'reducers/phonebook'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    blacklist: ["filter"]
  }


const persistedReducer = persistReducer(persistConfig, rootReducer)


let store = configureStore({reducer: persistedReducer})
let persistor = persistStore(store)
export { store, persistor }
