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
    return res.status(200).send(issues.sort((a, b) => b.upVotes.length - a.upVotes.length))
  })
})


// Get issues by user id
issuesRouter.get('/user', (req, res, next) => {
  Issue.find({user: req.auth._id}, (err, issues) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues.sort((a, b) => b.upVotes.length - a.upVotes.length))
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
    { _id: req.params.issueId, user: req.auth._id },
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
    { _id: req.params.issueId },
    currentIssueClone,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})


module.exports = issuesRouter