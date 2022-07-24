const express = require("express")
const issuesRouter = express.Router()
const Issue = require('../models/issue.js')


// Get All issues
issuesRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues.sort())
  })
})


// Get issues by user id
issuesRouter.get('/user', (req, res, next) => {
  Issue.find({user: req.auth._id}, (err, issues) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})


// Add new issue
issuesRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})


// Delete issue
issuesRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.todoId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
    }
  )
})


// Update issue
issuesRouter.put("/:issueId", async(req, res, next) => {
  const newBody = {
    ...req.body
  }
  const currentIssue = await Issue.findOne({_id: req.params.issueId})

  const currentIssueClone = {
    comments: [...currentIssue.comments],
    upVotes: [...currentIssue.upVotes],
    downVotes: [...currentIssue.downVotes]
  }

  if(newBody.upVoting) {
    if(currentIssueClone.upVotes.includes(newBody.userId)) {
      return
    }

    currentIssueClone.upVotes.push(newBody.userId)
    currentIssueClone.downVotes = currentIssueClone.downVotes.filter(dv => dv !== newBody.userId)
  }
  if(newBody.downVoting) {
    if(currentIssueClone.downVotes.includes(newBody.userId)) {
      return
    }

    currentIssueClone.downVotes.push(newBody.userId)
    currentIssueClone.upVotes = currentIssueClone.upVotes.filter(uv => uv !== newBody.userId)
  }
 
  currentIssueClone.comments = req.body.comments

  Issue.findOneAndUpdate(
    { _id: req.params.issueId , user: req.auth._id},
    currentIssueClone,
    { returnOriginal: false },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
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


module.exports = issuesRouter