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

const WorkoutProvider = (props) => {

    const {token} = useContext(UserContext)

    const [allWorkouts, setAllWorkouts] = useState([])
    const [userWorkouts, setUserWorkouts] = useState([])

    const [userExercises, setUserExercises] = useState([])


    // Workouts
    const getAllWorkouts = () => {
        userAxios.get('/api/workouts/')
            .then(res => {
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
                console.log(res.data)
                // setUserWorkouts(prevState => ([...prevState,res.data]))
                // setAllWorkouts(prevState => ([...prevState,res.data]))
            })
            .catch(err => console.log(err))
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

    // Exercises
    const addExercise = (newExercise) => {
        userAxios.post('/api/exercises/', newExercise)
            .then(res => {
                // console.log(res.data)
                setUserExercises(prevState => ([...prevState, res.data]))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const getUserExercises = () => {
        userAxios.get('/api/exercises/user')
            .then(res => setUserExercises([...res.data]))
            .catch(err => console.log(err.response.data.errMsg))
    }

    const updateExercise = (exerciseId, updates) => {
        userAxios.put(`/api/exercises/${exerciseId}`, updates)
            .then(res => getUserExercises())
            .catch(err => console.log(err))
    }

    const deleteExercise = (exerciseId) => {
        userAxios.delete(`/api/exercises/${exerciseId}`)
            .then(res => getUserExercises())
            .catch(err => console.log(err))
    }

    return (
        <WorkoutContext.Provider value={{
            allWorkouts,
            userWorkouts, 
            addWorkout, 
            updateWorkout,
            deleteWorkout,
            userExercises,
            addExercise,
            getUserExercises,
            updateExercise,
            deleteExercise
        }}
        >
            {props.children}
        </WorkoutContext.Provider>
    )
}

export default WorkoutProvider