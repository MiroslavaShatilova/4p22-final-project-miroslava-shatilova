import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReduser from "./counter/counterSlice";
import basketReduser from "./basket/basketSlice";
import productsSlice from "./products/productsSlice";
import categorySlice from "./category/categorySlice";
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';
import { persistReducer, persistStore } from 'redux-persist';
import searchSlice from "./search/searchSlice";

const persistConfig = {
    key: 'products',
    storage,
  }

const rootReducer = combineReducers({
    counter: counterReduser,
    basket: basketReduser,
    products: productsSlice,
    categories: categorySlice,
    search: searchSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]

});

export const persistor = persistStore(store);