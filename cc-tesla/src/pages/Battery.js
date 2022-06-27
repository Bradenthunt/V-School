import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../components/Context";

export default function Battery() {

    const {
        vehicle,
        accessToken,
        forwarder,
        batteryPercentage,
        setBatteryPercentage
    } = useContext(Context)

    const [destinationChargers, setDestinationChargers] = useState([])
    const [superchargers, setSuperchargers] = useState([])
    const [chargeInfo, setChargeInfo] = useState({})

    useEffect(() => {
        
        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/data_request/charge_state`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                console.log(res.data.response.battery_level)
                // setBatteryPercentage(res.data.response.battery_level)

                console.log(res.data.response)
                // setChargeInfo(res.data.response)
            })
            .catch(err => console.log(err))

        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/nearby_charging_sites`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                console.log(res.data.response.destination_charging)
                // setDestinationChargers(res.data.response.destination_charging)

                console.log(res.data.response.superchargers)
                // setSuperchargers(res.data.response.superchargers)

            })
            .catch(err => console.log(err))

    })

    return (
        <div className="main--content">
            <h2 className="battery--title">Battery</h2>
            <div className="battery--charts">
                <h2>Charging Info</h2>
                <ul>
                    <li style={{listStyle: 'none'}}>Current battery level: {batteryPercentage}%</li>
                    <li style={{listStyle: 'none'}}>Current range: {chargeInfo.battery_range}mi or km?</li>
                </ul>
                <i className="fa-solid fa-bolt"></i>
                <div className="chargers--list">
                    <h2>Nearby chargers</h2>
                    <h4>Superchargers</h4>
                        <ul>
                            <li style={{listStyle: 'none'}}></li>
                            <li style={{listStyle: 'none'}}></li>
                            <li style={{listStyle: 'none'}}></li>
                        </ul>
                    <h4>Destination Chargers</h4>
                        <ul>
                            <li style={{listStyle: 'none'}}></li>
                            <li style={{listStyle: 'none'}}></li>
                            <li style={{listStyle: 'none'}}></li>
                        </ul>
                </div>
                
            </div>
        </div>
    )
}