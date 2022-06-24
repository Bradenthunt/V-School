import React, { useContext } from "react";
import { Context } from "./Context";

export default function CardFilled(props) {

    const {setEditing, removeUglyThing} = useContext(Context)

    return (
        <div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--description">{props.description}</p>
            <div className="card--img--container">
                <img alt="ugly thing" className="card--img" src={props.imgUrl}/>
            </div>
            <div className="card--buttons">
                <button id="edit-button" onClick={() => setEditing(props.index)}>Edit</button>
                <button onClick={() => removeUglyThing(props._id)}>Delete</button>
            </div>
        </div>
    )
}