const express = require('express')
const bountyRouter = express.Router()
const Bounty = require('../models/bounty.js')


// Get All
bountyRouter.get('/', (req, res, next) => {
    Bounty.find((err, bounties) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

// Post One
bountyRouter.post('/', (req, res, next) => {
    const newBounty = new Bounty(req.body)
    newBounty.save((err, savedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedBounty)
    })
})

// Get One
// bountyRouter.get("/:bountyId", (req, res, next) => {
//     const bountyId = req.params.bountyId
//     const foundBounty = bounties.find(bounty => bounty._id === bountyId)
//     if(!foundBounty) {
//         const error = new Error(`The bounty with id ${bountyId} was not found.`)
//         res.status(500)
//         return next(error)
//     }
//     res.status(200).send(foundBounty)
// })

bountyRouter.get("/search/type", (req, res, next) => {
    Bounty.find({type: req.query.type}, (err, bounties) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(bounties)
    })
})

// Delete One
bountyRouter.delete("/:bountyId", (req, res, next) => {
    Bounty.findOneAndDelete({_id : req.params.bountyId}, (err, deletedBounty) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(`Successfully deleted the bounty of ${deletedBounty.firstName} ${deletedBounty.lastName} from database`)
    })
})

// Update One
bountyRouter.put("/:bountyId", (req, res, next) => {
    Bounty.findOneAndUpdate(
        {_id: req.params.bountyId}, // find this one
        req.body, // update with this data
        {new: true}, // send back updated version
        (err, updatedBounty) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(updatedBounty)
        }
    )
})

module.exports = bountyRouter