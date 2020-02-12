import React from "react";

function Display(props) {
    console.log(props);
    return (
        <div>
           {props.item} <button type="submit" onClick={props.handleDelete} id={props.id}>Done</button>
        </div>
    )

}

export default Display;

{/* {props.item}<button onClick={props.handleDelete}
                class={props.key}
                type="submit"
            >Done</button> */}