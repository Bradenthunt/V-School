const express = require("express")
const workoutRouter = express.Router()
const Workout = require('../models/Workout')


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
    { _id: req.params.todoId, user: req.auth._id },
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
      if(req.body.upVote) {
        // check if its already upvoted by their id if so we dont care and end early CAN DO ON FRONTENND BEFORE REQ
        if(upVotes.includes(req.body.userId)){
            return
        }
        // remove it from downvotes
        downVotes.filter(dv => dv !== userId)
        // add to upvotes
        upVotes.push(req.body.userId)
    }
    if(req.body.downvotes) {
        // check if already downvoted by their id if so we dont care and end early CAN DO ON FRONTEND BEFORE REQ
        if(downVotes.includes(req.body.userId)){
            return
        }
        // remove it from upvotes
        upVotes.filter(uv => uv !== userId)
        //add to downvotes
        downVotes.push(req.body.userId)
    }
      return res.status(201).send(updatedWorkout)
    }
  )
})

// upvotes: [12345, 6543]
//         downvotes: [934905]
//         // check if we are upvoting or downvoting (boolean passed into the api req)
//         if(data.upVote) {
//             // check if its already upvoted by their id if so we dont care and end early CAN DO ON FRONTENND BEFORE REQ
//             if(upvotes.includes(data.userId)){
//                 return
//             }
//             // remove it from downvotes
//             downvotes.filter(dv => dv !== userId)
//             // add to upvotes
//             upvotes.push(data.userId)
//         }
//         if(data.downvotes) {
//             // check if already downvoted by their id if so we dont care and end early CAN DO ON FRONTEND BEFORE REQ
//             if(downvotes.includes(data.userId)){
//                 return
//             }
//             // remove it from upvotes
//             upvotes.filter(uv => uv !== userId)
//             //add to downvotes
//             downvotes.push(data.userId)
//         }


module.exports = workoutRouter