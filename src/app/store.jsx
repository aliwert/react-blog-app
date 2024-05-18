import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import blogReducer from "../features/blogSlice";
const authPersistConfig = {
  key: "auth",
  storage,
};
const blogPersistConfig = {
  key: "blog",
  storage,
};
const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
  blog: persistReducer(blogPersistConfig, blogReducer),
});
const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);
export default store;
