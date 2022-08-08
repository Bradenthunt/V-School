import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider'


export default function Auth() {

    const initInputs = { username: '', password: ''}

    const [inputs, setInputs] = useState(initInputs)
    const [toggle, setToggle] = useState(false)

    const {
        signup, 
        login, 
        errMsg,
        resetAuthErr
    } = useContext(UserContext)

    const handleChange = (e) => {
        const {name, value} = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }

    const handleSignup = (e) => {
        e.preventDefault()
        signup(inputs)
    }

    const handleLogin = (e) => {
        e.preventDefault()
        login(inputs)

    }

    const toggleForm = () => {
        setToggle(prev => !prev)
        resetAuthErr()
    }

    return (
        <div>
            <h1 className='auth--page--title'>Hunt Fitness Tracker</h1>
            { !toggle ?
                <div className='auth--page--login'>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleSignup}
                        inputs={inputs}
                        btnText="Sign Up"
                        errMsg={errMsg}
                    />
                    <p className='auth--page--toggle' onClick={toggleForm}>Already joined?</p>
                </div>
                :
                <div className='auth--page--login'>
                    <AuthForm 
                        handleChange={handleChange}
                        handleSubmit={handleLogin}
                        inputs={inputs}
                        btnText="Log In"
                        errMsg={errMsg}
                    />
                    <p className='auth--page--toggle' onClick={toggleForm}>Haven't joined?</p>
                </div>
            }
        </div>
    )
}