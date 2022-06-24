import React, { useContext, useState } from "react";
import CardEditable from "./CardEditable";
import CardFilled from "./CardFilled";
import { Context } from "./Context";

export default function Card(props) {

    const {editing} = useContext(Context)

    return (
        <div className="card">
            {editing === props.index ? <CardEditable {...props}/> : <CardFilled {...props} />}
        </div>
    )
}