import { useState } from "react"
export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [editName, setEditName] = useState(initialName);

    const [isEditing, setIsEditing] = useState(false);

    function HandelEditClick() {

        setIsEditing((editing) => !editing);

    }
function handelChange(event){
    setPlayerName(event.target.value);

    setEditName(event.target.value)
}
    let EditableplayerName = <span className="player-name">{playerName}</span>;
    if (isEditing) {
        EditableplayerName = <input type="text" required value={playerName} onChange={handelChange} />

    }

    return (
        <li>
            <span className="player">
                {EditableplayerName}
                <span className="player-symbol">{symbol}</span>

            </span>

            <button onClick={HandelEditClick} >{isEditing ? "Save" : "Edit"}</button>

        </li>


    )
}