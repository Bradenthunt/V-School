import React, { useContext } from "react";
import { Context } from "./Context";

export default function Card() {

    const {
        uglyThingsArr,
        updateUglyThing,
        deleteUglyThing
    } = useContext(Context)

    return (
        <div className="card">
            <h2 className="card--title">{uglyThingsArr[0].title}</h2>
            <p className="card--description">{uglyThingsArr[0].description}</p>
            <img alt="ugly thing" className="card--img" src={uglyThingsArr[0].imgUrl}/>
            <div className="card--buttons">
                <button className="card--button" onClick={updateUglyThing}>Edit</button>
                <button className="card--button" onClick={deleteUglyThing}>Delete</button>
            </div>
        </div>
    )
}