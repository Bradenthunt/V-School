import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../components/Context";
// import teslaImg from colorCars[carModel][carColor]
import teslaImg from '../images/Tesla-Colors/modelYblue.png'

export default function Overview() {

    const {
        forwarder,
        vehicle,
        accessToken,
        batteryPercentage
    } = useContext(Context)

    const [odometer, setOdometer] = useState()
    const [carModel, setCarModel] = useState('')
    const [carColor, setCarColor] = useState('')

    const teslaImg = [carModel][carColor]

    const colorCars = {
        modely: {
            Red: '../images/Tesla-Colors/modelyred.png',
            DeepBlue: '../images/Tesla-Colors/modelyblue.png',
            PearlWhite: '../images/Tesla-Colors/modelywhite.png',
            SolidBlack: '../images/Tesla-Colors/modelyblack.png',
            MidnightSilver: '../images/Tesla-Colors/modelygrey.png'
        },
        model3: {
            Red: '../images/Tesla-Colors/model3red.png',
            DeepBlue: '../images/Tesla-Colors/model3blue.png',
            PearlWhite: '../images/Tesla-Colors/model3white.png',
            SolidBlack: '../images/Tesla-Colors/model3black.png',
            MidnightSilver: '../images/Tesla-Colors/model3grey.png'
        },
        models: {
            Red: '../images/Tesla-Colors/modelsred.png',
            DeepBlue: '../images/Tesla-Colors/modelsblue.png',
            PearlWhite: '../images/Tesla-Colors/modelswhite.png',
            SolidBlack: '../images/Tesla-Colors/modelsblack.png',
            MidnightSilver: '../images/Tesla-Colors/modelsgrey.png'
        },
        modelx: {
            Red: '../images/Tesla-Colors/modelxred.png',
            DeepBlue: '../images/Tesla-Colors/modelxblue.png',
            PearlWhite: '../images/Tesla-Colors/modelxwhite.png',
            SolidBlack: '../images/Tesla-Colors/modelxblack.png',
            MidnightSilver: '../images/Tesla-Colors/modelxgrey.png'
        }
    }

    useEffect(() => {

        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/${vehicle.id}/data_request/vehicle_config`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                    console.log(res.data.response.car_type)
                    setCarModel(res.data.response.car_type)

                    console.log(res.data.response.exterior_color)
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

    }, [])

    return (
        <div className="main--content">
            <div className="overview--content">
                <div className="overview--grid">
                    <h1>{vehicle.display_name}</h1>
                    <h2>{vehicle.vin}</h2>
                    <h2>{Math.floor(odometer)} miles</h2>
                    <h2 style={{color: batteryPercentage > 65 ? 'green' : batteryPercentage < 35 ? 'red' : 'yellow'}}>{batteryPercentage}%</h2>
                </div>
                <img className="overview--vehicle--image" src={teslaImg} />
            </div>
        </div>
    )
}