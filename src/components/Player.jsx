import React, { useState } from 'react'

export const Player = ({ initialName, symbol, isActive, onChangeName }) => {
    const [playerName, SetPlayerName] = useState(initialName);
    const [isEditing, SetIsEditing] = useState(false);

    function handleEditClick() {
        SetIsEditing((editing => !editing));

        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }

    function handleChange(event) {
        SetPlayerName(event.target.value)
    }

    let ediatablePlayerName = <span className='player-name'>{playerName}</span>;
    // let btnCaption = "Edit";

    if (isEditing) {
        ediatablePlayerName = (<input type="text" required value={playerName} onChange={handleChange} />
        )
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {ediatablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    )
}
