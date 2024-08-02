import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import tabsReducer from "./slices/tabsSlice";

export const reduxStore = configureStore({
    reducer: {
        user: userReducer,
        tabs: tabsReducer
    }
});

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;