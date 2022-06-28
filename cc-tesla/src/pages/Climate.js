import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../components/Context";

export default function Climate() {

    const {
        vehicle, 
        forwarder,
        accessToken
    } = useContext(Context)    

    const [temp, setTemp] = useState(70)

    // function increaseTemp() {
    //     setTemp(prevTemp => prevTemp + 1)
    // }

    // function decreaseTemp() {
    //     setTemp(prevTemp => prevTemp - 1)
    // }

    function fahToCel(num) {
        return Math.floor((num - 32) * 5/9)
    }

    function celToFah(num) {
        return Math.floor((num * 1.8) + 32)
    }

    function setTemperature() {

        const convertedTemp = fahToCel(temp)

        axios
            .post(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/command/set_temps`, {driver_temp: convertedTemp}, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                console.log(res)

            })
            .catch(err => console.log(err))

    }

    useEffect(() => {
        
        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/data_request/climate_state/`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                // console.log(res.data.response.driver_temp_setting)
                setTemp(celToFah(res.data.response.driver_temp_setting))

            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="main--content">
            <h2 className="climate--title">Climate</h2>
            <div className="climate--controls">
                <i className="fa-solid fa-angle-down controls" onClick={() => setTemp(prevTemp => prevTemp - 1)}></i>
                <h1 className="temp--number" style={{color: temp > 70 ? 'red' : 'blue'}}>{temp}</h1>
                <i className="fa-solid fa-angle-up controls" onClick={() => setTemp(prevTemp => prevTemp + 1)}></i>
            </div>
            <div className="temp--button" onClick={setTemperature}>Set Temp</div>            
        </div>
    )
}