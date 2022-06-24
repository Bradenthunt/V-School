import React, { useContext, useState } from "react";
import { Context } from "./Context";

export default function CardEditable(props) {

    const {updateUglyThing} = useContext(Context)

    const [title, setTitle] = useState(props.title)
    const [description, setDescription] = useState(props.description)
    const [imgUrl, setImgUrl] = useState(props.imgUrl)

    return (
        <div className="edit--form">
            <input 
                required
                name="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input 
                required
                name="description"
                type="text"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input 
                required
                name="imgUrl"
                type="url"
                placeholder="Image URL"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
            />
            <button onClick={() => updateUglyThing(title, description, imgUrl, props.index, props._id)}>Save</button>
        </div>
    )
}