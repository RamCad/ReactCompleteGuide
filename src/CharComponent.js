import React from "react";

const CharComponent = (props) => {
    return (
        <div className="inlinebox" onClick={props.deleteCharacter}>
            {props.character}
        </div>
    );
}

export default CharComponent;