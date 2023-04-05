import React from "react";
import "./EditPlayer.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../global/FetchAPI";
import { IPlayer } from "../../models/Interfaces";
import { useAppDispatch } from "../../global/Hooks";

export const EditPlayer = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const playerID = id !== undefined ? String(id) : "";
    const [player, setPlayer] = React.useState({
        id: playerID, title: "", first: "",
        last: "", age: 0, info: ""
    });

    React.useEffect(() => {
        dispatch(API.getOne(playerID))
    }, [dispatch]);
    
    const handleDelete = () => {
        dispatch(API.delete(playerID));
    };

    const handleChange =
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setPlayer({...player, 
            [event.target.name]: event.target.value});
    };

    const handleSubmit =
    async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        await dispatch(API.update(player));
        setPlayer({} as IPlayer);
        navigate("/");
    };

    return (
        <React.Fragment>
            <h1>EditPlayer</h1>
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
                        type="first" 
                        name="first"
                        placeholder="First"
                        value={player.first}
                        onChange={handleChange}
                    />
                </aside>
                <aside>
                    <label htmlFor="last">Last</label>
                    <input 
                        type="last" 
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
                    <input 
                        type="text" 
                        name="info"
                        placeholder="Info"
                        value={player.info}
                        onChange={handleChange}
                    />
                </aside>
                <footer>
                    <button>
                        <Link to="/">Cancel</Link>
                    </button>
                    <button 
                        onClick={handleDelete}
                        >Delete
                    </button>
                    <button 
                        type="submit"
                        >Update Plaer
                    </button>
                </footer>
            </form>
        </React.Fragment>
    );
};


