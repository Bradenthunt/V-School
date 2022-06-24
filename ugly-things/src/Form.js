import React, {useContext} from "react";
import { Context } from "./Context";

export default function Form() {

    const {
        uglyThingsArr, 
        addUglyThing
    } = useContext(Context)

    return (
        <form 
            className="form" 
            name="uglyform" 
            onSubmit={addUglyThing}
        >
            <h2>Put Your Ugly Here</h2>
            <input 
                required
                name="title"
                type="text"
                placeholder="Title"
                value={uglyThingsArr.title}
                onChange={(e) => e.target.value}
            />
            <input 
                required
                name="description"
                type="text"
                placeholder="Description"
                value={uglyThingsArr.description}
                onChange={(e) => e.target.value}
            />
            <input 
                required
                name="imgUrl"
                type="url"
                placeholder="Image URL"
                value={uglyThingsArr.imgUrl}
                onChange={(e) => e.target.value}
            />
            <button>Submit</button>
        </form>
    )
}