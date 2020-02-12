import React from "react";

function Display(props) {
    return (
        <div>
            {props.item}<button onClick={props.handleDelete}
                class={props.key}
                type="submit"
            >Done</button>
        </div>
    )

}

export default Display;