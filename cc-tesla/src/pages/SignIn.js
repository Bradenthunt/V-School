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

        console.log(accessToken)

        axios
            .get(`${forwarder}https://owner-api.teslamotors.com/api/1/vehicles/`, {headers: {Authorization: `Bearer ${accessToken}`}})
            .then(res => {
                setVehicle(res.data.response[0])
                wakeUp(res.data.response[0])
                alert("You're all signed in!")
            })
            .catch(err => {
                console.log(err)
                alert("Error signing in. Please check console for more info.")
            })
    }

    return (
        <div className="main--content">
            <form name="login" className="login--form" onSubmit={signIn}>
                <h2>Sign in with your Tesla Access Token</h2>
                <input
                    type="text"
                    name="access-token"
                    value={accessToken}
                    placeholder="Access Token"
                    onChange={(e) => setAccessToken(e.target.value)}
                />
                <button>Sign In</button>
            </form>
            
        </div>
    )
}