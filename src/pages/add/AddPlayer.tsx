import React from "react";
import "./AddPlayer.css";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../global/Hooks";
import { IData } from "../../models/Interfaces";
import { API } from "../../global/FetchAPI";

export const AddPlayer = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [player, setPlayer] = React.useState<IData>({
        title: "", first: "", last: "",
        age: 0, info: ""
    });

    const handleChange = 
    (event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement
    >) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value})
    };

    const handleSubmit =
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(API.create(player));
        setPlayer({} as IData);
        navigate("/");
    };

    return (
        <React.Fragment>
            <h1>AddPlayer</h1>
            <form onSubmit={handleSubmit}>
                <aside>
                    <label htmlFor="title">Title</label>
                    <input 
                        type="text" 
                        name="title"
                        placeholder="Title"
                        value={player.title}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="first">First</label>
                    <input 
                        type="text" 
                        name="first"
                        placeholder="First"
                        value={player.first}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="last">Last</label>
                    <input 
                        type="text" 
                        name="last"
                        placeholder="Last"
                        value={player.last}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age"
                        placeholder="Age"
                        value={player.age}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="info">Info</label>
                    <textarea 
                        name="info"
                        placeholder="Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </aside>
                <button>
                    <Link to="/">Cancel</Link>
                </button>
                <button type="submit">Add Player</button>
            </form>
        </React.Fragment>
    );
};


