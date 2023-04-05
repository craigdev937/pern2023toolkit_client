import React from "react";
import "./Players.css";
import { Link } from "react-router-dom";
import { API } from "../../global/FetchAPI";
import { useAppSelector, 
    useAppDispatch } from "../../global/Hooks";

export const Players = () => {
    const dispatch = useAppDispatch();
    const { error, loading, players } = 
        useAppSelector((state) => state.players);

    React.useEffect(() => {
        dispatch(API.fetchAll());
    }, [dispatch]);

    return (
        <React.Fragment>
            <button>
                <Link to="/add">Add Player</Link>
            </button>
            {error ? (
                <h1>Error...</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : (
                <main>
                    {players.map((player) => (
                        <aside key={player.id}>
                            <h3>{player.first} {player.last}</h3>
                            <p>Age: {player.age}</p>
                            <p>Title: {player.title}</p>
                            <p>Info: {player.info}</p>
                        </aside>
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};


