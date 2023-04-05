import React from "react";
import { Link } from "react-router-dom";
import { IPlayer } from "../models/Interfaces";

type PLAY = {
    player: IPlayer
};

export const Item = ({player}: PLAY) => {
    return (
        <React.Fragment>
            <section key={player.id}>
                <h3>{player.first} {player.last}</h3>
                <p>Age: {player.age}</p>
                <p>Title: {player.title}</p>
                <p>Info: {player.info}</p>
                <button>
                    <Link to={`/edit/${player.id}`}
                        >Edit Player
                    </Link>
                </button>
            </section>
        </React.Fragment>
    );
};

