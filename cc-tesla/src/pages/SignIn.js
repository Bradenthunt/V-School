import axios from "axios";
import React, { useContext } from "react";
import { Context } from "../components/Context";

export default function SignIn() {

    const {
        accessToken,
        setAccessToken,
        setVehicle,
        forwarder,
        wakeUp
    } = useContext(Context)

    function signIn(e) {
        e.preventDefault()

        window.localStorage.setItem('accessToken', accessToken)

        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                setVehicle(res.data.response[0])
                wakeUp(res.data.response[0])
                window.localStorage.setItem('vehicle', JSON.stringify(res.data.response[0]))
                alert("You're all signed in!")
            })
            .catch(err => {
                console.log(err)
                alert("Error signing in. Please check console for more info.")
            })
    }

    function logOut() {
        window.localStorage.removeItem('vehicle')

        window.localStorage.removeItem('accessToken')

        setAccessToken('')

        setVehicle({})
    }

    return (
        <div className="main--content">
            <div className="login--form">
                <h2>Sign in with your Tesla Access Token</h2>
                <input
                    type="text"
                    name="access-token"
                    value={accessToken}
                    placeholder="Access Token"
                    onChange={(e) => setAccessToken(e.target.value)}
                />
                <button onClick={signIn}>Sign In</button>
                <button onClick={logOut}>Log Out</button>
            </div>
        </div>
    )
}