const express = require("express")
const exerciseRouter = express.Router()
const Exercise = require('../models/Exercise')


// EXERCISES
// Get exercises by user id
exerciseRouter.get('/user', (req, res, next) => {
    Exercise.find({user: req.auth._id}, (err, exercises) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(exercises)
    })
  })
  
  
  // Add new exercise
  exerciseRouter.post("/", (req, res, next) => {
    req.body.user = req.auth._id
    const newExercise = new Exercise(req.body)
    newExercise.save((err, savedExercise) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedExercise)
    })
  })
  
  // Delete exercise
  exerciseRouter.delete("/:exerciseId", (req, res, next) => {
    Exercise.findOneAndDelete(
      { _id: req.params.exerciseId, user: req.auth._id },
      (err, deletedExercise) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(200).send(`Successfully deleted exercise: ${deletedExercise.name}`)
      }
    )
  })
  
  
  // Update exercise
  exerciseRouter.put("/:exerciseId", (req, res, next) => {
    Exercise.findOneAndUpdate(
      { _id: req.params.exerciseId },
      req.body,
      { new: true },
      (err, updatedExercise) => {
        if(err){
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedExercise)
      }
    )
  })
  
  
  module.exports = exerciseRouter