import React from "react";

const UserInput = (props) => {
    return (
        <div style={props.style}>
            <input type="text" onChange={props.eventHandler} value={props.userName}/>
        </div>
    )
}

export default UserInput;