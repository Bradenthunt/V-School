import React, {useState} from "react";
import axios from "axios";

const Context = React.createContext()

function ContextProvider(props) {

    const [uglyThingsArr, setUglyThingsArr] = useState([])
    const [editing, setEditing] = useState()


    React.useEffect(() => {
        axios
          .get("https://api.vschool.io/bradenthunt/thing")
          .then(res => setUglyThingsArr(res.data))
    }, [])

    function addUglyThing(e) {
        e.preventDefault()

        const Form = document.uglyform

        const newUglyThing = {
            title: Form.title.value,
            description: Form.description.value,
            imgUrl: Form.imgUrl.value
        }

        axios
            .post('https://api.vschool.io/bradenthunt/thing', newUglyThing)
            .then(res => setUglyThingsArr(prevUglyThings => [...prevUglyThings, res.data]))
            .catch(err => console.log(err))

        Form.title.value = ''
        Form.description.value = ''
        Form.imgUrl.value = ''
    }

    function updateUglyThing(title, description, imgUrl, index, _id) {

        const edit = {
            title: title,
            description: description,
            imgUrl: imgUrl
        }

        axios
            .put(`https://api.vschool.io/bradenthunt/thing/${_id}`, edit)
            .then((res) => {
                let prevUglyThings = [...uglyThingsArr]

                prevUglyThings[index] = res.data

                setUglyThingsArr(prevUglyThings)
            })
            .catch(err => console.log(err))

        setEditing()
    }

    function removeUglyThing(_id) {
        
        axios
            .delete(`https://api.vschool.io/bradenthunt/thing/${_id}`)
            .then((res) => {
                let prevUglyThings = [...uglyThingsArr]

                const filteredUglyThings = prevUglyThings.filter(thing => {
                    return thing._id != _id
                })

                setUglyThingsArr(filteredUglyThings)
            })
            .catch(err => console.log(err))

    }

    return (
        <Context.Provider value={{
            uglyThingsArr,
            setUglyThingsArr,
            addUglyThing,
            removeUglyThing,
            updateUglyThing,
            editing,
            setEditing
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}