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
                setBatteryPercentage(res.data.response.battery_level)

                console.log(res.data.response)
                setChargeInfo(res.data.response)
            })
            .catch(err => console.log(err))

        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/nearby_charging_sites`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                console.log(res.data.response.destination_charging)
                setDestinationChargers(res.data.response.destination_charging)

                console.log(res.data.response.superchargers)
                setSuperchargers(res.data.response.superchargers)

            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="main--content">
            <h2 className="battery--title">Battery</h2>
            <div className="battery--charts">
                <h2>Battery Info</h2>
                <ul>
                    <li style={{listStyle: 'none'}}>Current battery level: {batteryPercentage}%</li>
                    <li style={{listStyle: 'none'}}>Current range: {chargeInfo.battery_range}mi</li>
                </ul>
                <i className="fa-solid fa-bolt"></i>
                <div className="chargers--list">
                    <h2>Nearby Chargers</h2>
                    <h4>Superchargers</h4>
                        <ul>
                            <li style={{listStyle: 'none'}}>{superchargers[0].name} {Math.floor(superchargers[0].distance_miles)} away Available stalls: {superchargers[0].available_stalls}/{superchargers[0].total_stalls}</li>
                            <li style={{listStyle: 'none'}}>{superchargers[1].name} {Math.floor(superchargers[1].distance_miles)} away Available stalls: {superchargers[1].available_stalls}/{superchargers[1].total_stalls}</li>
                            <li style={{listStyle: 'none'}}>{superchargers[2].name} {Math.floor(superchargers[2].distance_miles)} away Available stalls: {superchargers[2].available_stalls}/{superchargers[2].total_stalls}</li>
                        </ul>
                    <h4>Destination Chargers</h4>
                        <ul>
                            <li style={{listStyle: 'none'}}>{destinationChargers[0].name} {Math.floor(destinationChargers[0].distance_miles)} away</li>
                            <li style={{listStyle: 'none'}}>{destinationChargers[1].name} {Math.floor(destinationChargers[1].distance_miles)} away</li>
                            <li style={{listStyle: 'none'}}>{destinationChargers[2].name} {Math.floor(destinationChargers[2].distance_miles)}away</li>
                        </ul>
                </div>
                
            </div>
        </div>
    )
}