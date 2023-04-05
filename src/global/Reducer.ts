import { configureStore } from "@reduxjs/toolkit";
import { PlayerReducer } from "./PlayerSlice";

export const Reducer = configureStore({
    reducer: {
        players: PlayerReducer
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;


