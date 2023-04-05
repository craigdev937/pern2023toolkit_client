import { createAsyncThunk } from "@reduxjs/toolkit";
import { IData, IPlayer } from "../models/Interfaces";
const URL = "https://pern2023toolkit-craigdev937.onrender.com/api";

class FetchAPI {
    create = createAsyncThunk("players/create", 
    async (payload: IData) => {
        const res: Response = await fetch(URL, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, first: payload.first, 
                last: payload.last, age: payload.age,
                info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    fetchAll = createAsyncThunk("players/fetchAll", 
    async () => {
        const res: Response = await fetch(URL);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return [...data];
    });

    getOne = createAsyncThunk("players/getOne", 
    async (id: string) => {
        const res: Response = 
        await fetch(`${URL}/${id}`);
        if (!res.ok) throw new Error(res.statusText);
        const player = await res.json();
        return player;
    });

    update = createAsyncThunk("players/update", 
    async (payload: IPlayer) => {
        const res: Response =
        await fetch(`${URL}/${payload.id}`, {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                title: payload.title, first: payload.first,
                last: payload.last, age: payload.age,
                info: payload.info
            }),
        });
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data;
    });

    delete = createAsyncThunk("players/delete", 
    async (id: string) => {
        const res: Response = 
        await fetch(`${URL}/${id}`, {
            method: "DELETE"
        });
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
    });
};

export const API: FetchAPI = new FetchAPI();


