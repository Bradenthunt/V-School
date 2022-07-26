import React, { useContext, useState, useEffect } from "react";
import axios from 'axios'
import { UserContext } from "./UserProvider";

export const WorkoutContext = React.createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

export default function WorkoutProvider(props) {

    const {token} = useContext(UserContext)

    const [allWorkouts, setAllWorkouts] = useState([])
    const [userWorkouts, setUserWorkouts] = useState([])

    const getAllWorkouts = () => {
        userAxios.get('/api/workouts/')
            .then(res => {
                // console.log(res.data)
                setAllWorkouts([...res.data])
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const getUserWorkouts = () => {
        userAxios.get('/api/workouts/user')
            .then(res => setUserWorkouts([...res.data]))
            .catch(err => console.log(err.response.data.errMsg))
    }

    const addWorkout = (newWorkout) => {
        userAxios.post('/api/workouts/', newWorkout)
            .then(res => {
                setUserWorkouts(prevState => ([...prevState, res.data]))
                setAllWorkouts(prevState => ([...prevState, res.data]))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const updateWorkout = (workoutId, updates) => {
        userAxios.put(`/api/workouts/${workoutId}`, updates)
            .then(res => {
                getAllWorkouts()
                getUserWorkouts()
            })
            .catch(err => console.log(err))
    }

    const deleteWorkout = (workoutId) => {
        userAxios.delete(`/api/workouts/${workoutId}`)
            .then(res => {
                getAllWorkouts()
                getUserWorkouts()
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if(token !== '') {
            getAllWorkouts()
            getUserWorkouts()
        }
    }, [token])

    return (
        <WorkoutContext.Provider value={{
            allWorkouts,
            userWorkouts, 
            addWorkout, 
            updateWorkout,
            deleteWorkout
        }}
        >
            {props.children}
        </WorkoutContext.Provider>
    )
}