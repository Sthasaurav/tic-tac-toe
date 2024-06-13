import { useState } from "react"
export default function Player({ initialName, symbol }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function HandelEditClick() {

        setIsEditing((editing) => !editing);

    }

    let EditableplayerName = <span className="player-name">{initialName}</span>;
    if (isEditing) {
        EditableplayerName = <input type="text" required defaultvalue={initialName} />

    }

    return (
        <li>
            <span className="player">
                {EditableplayerName}
                <span className="player-symbol">{symbol}</span>

            </span>

            <button onClick={HandelEditClick}>{isEditing ? "Save" : "Edit"}</button>

        </li>


    )
}