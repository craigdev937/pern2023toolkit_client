import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IData, IPlayer, IPlayerState } from "../models/Interfaces";
import { API } from "../global/FetchAPI";

const initialState: IPlayerState = {
    players: [],
    loading: false,
    error: null
};

const PlayerSlice = createSlice({
    name: "players",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.create.rejected.toString(), 
        (state, action: PayloadAction<IPlayerState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.create.pending, 
        (state) => {
            state.error = null,
            state.loading = true
        });
        builder.addCase(API.create.fulfilled.type, 
        (state, action: PayloadAction<IPlayer>) => {
            state.loading = false
            state.players.push(action.payload)
        });
        builder.addCase(API.fetchAll.rejected.toString(), 
        (state, action: PayloadAction<IPlayerState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.fetchAll.pending, 
        (state) => {
            state.error = null,
            state.loading = true
        });
        builder.addCase(API.fetchAll.fulfilled.type, 
        (state, action: PayloadAction<IPlayer[]>) => {
            state.loading = false,
            state.players = [...action.payload]
        });
    },
});

export const PlayerReducer = PlayerSlice.reducer;


