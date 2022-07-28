import axios from "axios";
import React, { useContext } from "react";
import { Context } from "../components/Context";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullhorn, faLock, faUnlock, faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function Controls() {

    const {
        vehicle, 
        forwarder,
        accessToken,
        wakeUp
    } = useContext(Context)

    function honkHorn() {

        wakeUp(vehicle)

        axios
            .post(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/command/honk_horn`, {}, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    function flashLights() {

        wakeUp(vehicle)

        axios
            .post(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/command/flash_lights`, {}, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    function lockCar() {

        wakeUp(vehicle)
        
        axios
            .post(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/command/door_lock`, {}, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    function unlockCar() {

        wakeUp(vehicle)
        
        axios
            .post(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/command/door_unlock`, {}, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => console.log(res))
            .catch(err => console.log(err))

    }

    return (
        <div className="main--content">
            <h2 className="controls--title">Controls</h2>
            <div className="controls--container">
                <FontAwesomeIcon icon={faBullhorn} className='controls' onClick={honkHorn}/>
                {/* <i className="fa-solid fa-bullhorn controls" onClick={honkHorn}></i> */}
                <div className="controls">
                    <FontAwesomeIcon icon={faLock} className='lock' onClick={lockCar}/>
                    <FontAwesomeIcon icon={faUnlock} className='unlock' onClick={unlockCar}/>
                    {/* <i className="fa-solid fa-lock lock" onClick={lockCar}></i>
                    <i className="fa-solid fa-unlock unlock" onClick={unlockCar}></i> */}
                </div>
                {/* <i className="fa-solid fa-lightbulb controls" onClick={flashLights}></i> */}
                <FontAwesomeIcon icon={faLightbulb} className='controls' onClick={flashLights}/>
            </div>
        </div>
    )
}