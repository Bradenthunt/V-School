import React, { useContext, useState } from "react";
import { WorkoutContext } from "../../context/WorkoutProvider";
import ExerciseForm from "../ExerciseForm";
import ExerciseList from "../ExerciseList";

const Workout = () => {

    const {
        addWorkout, 
        addExercise,
        userExercises,
        setUserExercises
    } = useContext(WorkoutContext)

    const [workoutName, setWorkoutName] = useState('')
    const [workoutDescription, setWorkoutDescription] = useState('')

    const submitWorkout = () => {
        addWorkout({name: workoutName, description: workoutDescription, exercises: userExercises})
        setUserExercises([])
        setWorkoutName('')
        setWorkoutDescription('')
    }

    const handleName = (e) => {
        setWorkoutName(e.target.value)
    }

    const handleDescription = (e) => {
        setWorkoutDescription(e.target.value)
    }
    


    return (
        <div className="workout--page">
            <h1 className="workout--page--title">Workout</h1>
            <h3 className="workout--page--subtitle">Details</h3>
            <div className="workout--page--details">
                <input 
                    type="text"
                    name='name'
                    value={workoutName}
                    onChange={handleName}
                    placeholder='Name'
                />
                <input 
                    type="text"
                    name='description'
                    value={workoutDescription}
                    onChange={handleDescription}
                    placeholder='Description'
                />
            </div>
            <h3 className="workout--page--subtitle">Add Exercise</h3>
            <ExerciseForm addExercise={addExercise}/>
            <ExerciseList exercises={userExercises}/>
            <button className='submit--workout--button' onClick={() => submitWorkout()}>Complete Workout</button>
        </div>
    )
}

export default Workout