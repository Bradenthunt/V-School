import axios from "axios"
import React, { useState } from "react"

const Context = React.createContext()

function ContextProvider(props) {

    const [accessToken, setAccessToken] = useState(window.localStorage.getItem('accessToken'))

    const [vehicle, setVehicle] = useState()

    const [batteryPercentage, setBatteryPercentage] = useState(66)

    const forwarder = 'https://cors-anywhere.herokuapp.com/'

    function wakeUp() {

        axios
            .post(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/wake_up`, {}, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    return (
        <Context.Provider value={{
            accessToken,
            setAccessToken,
            vehicle,
            setVehicle,
            forwarder,
            wakeUp,
            batteryPercentage, 
            setBatteryPercentage
        }}>
            {props.children}
        </Context.Provider>
    )
}

export {Context, ContextProvider}