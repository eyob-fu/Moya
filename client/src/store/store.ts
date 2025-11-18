import { configureStore } from "@reduxjs/toolkit";
import userInfoReducer from "./features/userInfo";
// TODO: add slices and reducers here as your app grows
export const store = configureStore({
  reducer: {
    userInfo: userInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
