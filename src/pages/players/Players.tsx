import React from "react";
import "./Players.css";
import { Link } from "react-router-dom";
import { API } from "../../global/FetchAPI";
import { playerSelectors } from "../../global/PlayerSlice";
import { Item } from "../../components/Item";
import { useAppSelector, 
    useAppDispatch } from "../../global/Hooks";

export const Players = () => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.players.loading);
    const error = useAppSelector((state) => state.players.error);
    const allPlayers = useAppSelector(playerSelectors.selectAll);

    React.useEffect(() => {
        dispatch(API.fetchAll());
    }, [dispatch]);

    return (
        <React.Fragment>
            <button>
                <Link to="/add">Add Player</Link>
            </button>
            {error ? (
                <h1>Error...{error.message}</h1>
            ) : loading ? (
                <h1>Loading...</h1>
            ) : (
                <main>
                    {allPlayers.map((player) => (
                        <Item key={player.id} player={player} />
                    ))}
                </main>
            )}
        </React.Fragment>
    );
};


