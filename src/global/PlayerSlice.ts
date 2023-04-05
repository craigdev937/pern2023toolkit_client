import { createSlice, createEntityAdapter, 
    PayloadAction } from "@reduxjs/toolkit";
import { IPlayer, IPlayerState } from "../models/Interfaces";
import { RootState } from "./Reducer";
import { API } from "../global/FetchAPI";

const playerAdapter = createEntityAdapter<IPlayer>({
    selectId: (player) => player.id,
    sortComparer: (a, b) => a.first.localeCompare(b.first),
});

export const playerSelectors =
playerAdapter.getSelectors<RootState>((state) => state.players);

const initialState: IPlayerState = {
    players: [],
    loading: false,
    error: null
};

const PlayerSlice = createSlice({
    name: "players",
    initialState: playerAdapter.getInitialState(initialState),
    reducers: {},
    extraReducers: (builder) => {
        // Create a new Player
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
            playerAdapter.addOne(state, action.payload)
        });
        // Fetch all Players
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
            playerAdapter.setAll(state, [...action.payload])
        });
        // Get only one Player
        builder.addCase(API.getOne.rejected.toString(), 
        (state, action: PayloadAction<IPlayerState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.getOne.pending, 
        (state) => {
            state.error = null,
            state.loading = true
        });
        builder.addCase(API.getOne.fulfilled.type, 
        (state, action: PayloadAction<IPlayer>) => {
            state.loading = false,
            playerAdapter.setOne(state, action.payload)
        });
        // Update a Player
        builder.addCase(API.update.rejected.toString(), 
        (state, action: PayloadAction<IPlayerState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.update.pending, 
        (state) => {
            state.error = null,
            state.loading = true
        });
        builder.addCase(API.update.fulfilled.type, 
        (state, action: PayloadAction<IPlayer>) => {
            state.loading = false;
            playerAdapter.updateOne(state, {
                id: action.payload.id,
                changes: action.payload
            })
        });
        // Delete a Player
        builder.addCase(API.delete.rejected.toString(), 
        (state, action: PayloadAction<IPlayerState>) => {
            state.loading = false,
            state.error = action.payload.error
        });
        builder.addCase(API.delete.pending, 
        (state) => {
            state.error = null,
            state.loading = true
        });
        builder.addCase(API.delete.fulfilled.type, 
        (state, action: PayloadAction<IPlayer>) => {
            state.loading = false,
            playerAdapter.removeOne(state, action.payload.id)
        });
    },
});

export const PlayerReducer = PlayerSlice.reducer;


