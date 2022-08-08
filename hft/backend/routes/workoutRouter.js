const express = require("express")
const workoutRouter = express.Router()
const Workout = require('../models/Workout')


// WORKOUTS
// Get All workouts
workoutRouter.get("/", (req, res, next) => {
  Workout.find((err, workouts) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(workouts)
  })
})


// Get Workouts by user id
workoutRouter.get('/user', (req, res, next) => {
  Workout.find({user: req.auth._id}, (err, workouts) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(workouts)
  })
})


// Add new Workout
workoutRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newWorkout = new Workout(req.body)
  newWorkout.save((err, savedWorkout) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedWorkout)
  })
})


// Delete Workout
workoutRouter.delete("/:workoutId", (req, res, next) => {
  Workout.findOneAndDelete(
    { _id: req.params.workoutId, user: req.auth._id },
    (err, deletedWorkout) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted workout: ${deletedWorkout.title}`)
    }
  )
})


// Update Workout
workoutRouter.put("/:workoutId", (req, res, next) => {
  Workout.findOneAndUpdate(
    { _id: req.params.workoutId , user: req.auth._id},
    req.body,
    { new: true },
    (err, updatedWorkout) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedWorkout)
    }
  )
})


module.exports = workoutRouter