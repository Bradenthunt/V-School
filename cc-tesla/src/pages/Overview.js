import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../components/Context";
import modelYblue from '../images/Tesla-Colors/modelYblue.png'
import modelYred from '../images/Tesla-Colors/modelYred.png'
import modelYblack from '../images/Tesla-Colors/modelYblack.png'
import modelYwhite from '../images/Tesla-Colors/modelYwhite.png'
import modelYgrey from '../images/Tesla-Colors/modelYgrey.png'
import model3blue from '../images/Tesla-Colors/model3blue.png'
import model3red from '../images/Tesla-Colors/model3red.png'
import model3white from '../images/Tesla-Colors/model3white.png'
import model3black from '../images/Tesla-Colors/model3black.png'
import model3grey from '../images/Tesla-Colors/model3grey.png'
import modelSblue from '../images/Tesla-Colors/modelSblue.png'
import modelSred from '../images/Tesla-Colors/modelSred.png'
import modelSblack from '../images/Tesla-Colors/modelSblack.png'
import modelSwhite from '../images/Tesla-Colors/modelSwhite.png'
import modelSgrey from '../images/Tesla-Colors/modelSgrey.png'
import modelXgrey from '../images/Tesla-Colors/modelXgrey.png'
import modelXblue from '../images/Tesla-Colors/modelXblue.png'
import modelXred from '../images/Tesla-Colors/modelXred.png'
import modelXwhite from '../images/Tesla-Colors/modelXwhite.png'
import modelXblack from '../images/Tesla-Colors/modelXblack.png'

export default function Overview() {

    const {
        forwarder,
        vehicle,
        accessToken,
        batteryPercentage,
        setBatteryPercentage
    } = useContext(Context)

    const [odometer, setOdometer] = useState(0)
    const [carModel, setCarModel] = useState('default')
    const [carColor, setCarColor] = useState('default')

    const colorCars = {
        modely: {
            Red: modelYred,
            DeepBlue: modelYblue,
            PearlWhite: modelYwhite,
            SolidBlack: modelYblack,
            MidnightSilver: modelYgrey
        },
        model3: {
            Red: model3red,
            DeepBlue: model3blue,
            PearlWhite: model3white,
            SolidBlack: model3black,
            MidnightSilver: model3grey
        },
        models: {
            Red: modelSred,
            DeepBlue: modelSblue,
            PearlWhite: modelSwhite,
            SolidBlack: modelSblack,
            MidnightSilver: modelSgrey
        },
        modelx: {
            Red: modelXred,
            DeepBlue: modelXblue,
            PearlWhite: modelXwhite,
            SolidBlack: modelXblack,
            MidnightSilver: modelXgrey
        },
        default: {
            default: model3white
        }
    }

    useEffect(() => {

        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/data_request/vehicle_config`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                    // console.log(res.data.response)
                    // console.log(res.data.response.car_type)
                    setCarModel(res.data.response.car_type)

                    // console.log(res.data.response.exterior_color)
                    setCarColor(res.data.response.exterior_color)

                })
            .catch(err => console.log(err))

        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/data_request/vehicle_state`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                    // console.log(res.data.response.odometer)
                    setOdometer(res.data.response.odometer)
                })
            .catch(err => console.log(err))

        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/data_request/charge_state`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                // console.log(res.data.response.battery_level)
                setBatteryPercentage(res.data.response.battery_level)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <div className="main--content">
            <div className="overview--content">
                <div className="overview--grid">
                    <h1>{vehicle.display_name}</h1>
                    <h2>{vehicle.vin}</h2>
                    <h2>{Math.floor(odometer)} miles</h2>
                    <h2 style={{color: batteryPercentage > 65 ? 'green' : batteryPercentage < 35 ? 'red' : 'yellow', fontWeight: 800}}>{batteryPercentage}%</h2>
                </div>
                <img className="overview--vehicle--image" src={colorCars?.[carModel]?.[carColor]} />
            </div>
        </div>
    )
}