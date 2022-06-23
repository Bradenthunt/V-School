import React, {useState} from "react";
import axios from "axios";

const Context = React.createContext()

function ContextProvider(props) {

    const [uglyThingsArr, setUglyThingsArr] = useState([])

    React.useEffect(() => {
        axios
          .get("https://api.vschool.io/bradenthunt/thing")
          .then(res => setUglyThingsArr(res.data))
    }, [])

    // NOT POSTING TO API, not sure how to pass form values into it
    function addUglyThing() {

        let newUglyThing = {
            title: uglyThingsArr.title,
            description: uglyThingsArr.description,
            imgUrl: uglyThingsArr.imgUrl
        }

        axios
            .post('https://api.vschool.io/bradenthunt/thing', {newUglyThing})
            .then(() => {setUglyThingsArr(prevUglyThings => {
                return [{...prevUglyThings}, {newUglyThing}]
            })})
        
    }

    function updateUglyThing(e) {

        const {name, value} = e.target

        axios
            .put(`https://api.vschool.io/bradenthunt/thing/${uglyThingsArr._id}`, {
                ...uglyThingsArr,
                [name]: value
            })
            .then(res => console.log(res))
    }

    function removeUglyThing(uglyThingsArr) {

        axios
            .delete(`https://api.vschool.io/bradenthunt/thing/${uglyThingsArr._id}`)
            .then(() => {
                alert("Ugly thing deleted!")
            })
            .catch(err => console.log(err))

    }

    return (
        <Context.Provider value={{
            uglyThingsArr,
            addUglyThing,
            removeUglyThing,
            updateUglyThing
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}