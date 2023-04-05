import { configureStore } from "@reduxjs/toolkit";

export const Reducer = configureStore({
    reducer: {
        players: () => "PERN Players!"
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


