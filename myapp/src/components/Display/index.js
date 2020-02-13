import React from "react";
const FA = require("react-fontawesome");

function Display(props) {
    console.log(props);
    // const Style = {
    //     check: {
    //         "display": "block",
    //         "width": "25px",
    //         "height": "50px",
    //         "line-height": "80px",
    //         "border": "2px solid #f5f5f5",
    //         "border-radius": "50%",
    //         "color": "#f5f5f5",
    //         "text-align": "center",
    //         "text-decoration": "none",
    //         "background": "#555777",
    //         "box-shadow": "0 0 3px gray",
    //         "font-size": "20px",
    //         "font-weight": "bold"
    //     }
    // }
    return (
        <div style={{"display": "block"}}>
            <button type="submit" onClick={props.handleDelete} id={props.id}>
                {props.item} <FA name="check" className="check" />
            </button>
        </div>
    )

}

export default Display;
