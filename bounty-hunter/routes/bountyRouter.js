const express = require('express')
const bountyRouter = express.Router()
const {v4: uuidv4} = require('uuid')


const bounties = [
    {
        firstName: 'Bill',
        lastName: 'Buttlicker',
        living: false,
        bountyAmount: 100,
        type: 'Sith',
        _id: uuidv4()
    },
    {
        firstName: 'Jim',
        lastName: 'Jimothy',
        living: true,
        bountyAmount: 150,
        type: 'Jedi',
        _id: uuidv4()
    }
]

// Get One
bountyRouter.get("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bountyRouter.get("/search/type", (req, res) => {
    const type = req.query.type
    const filteredBounties = bounties.filter(bounty => bounty.type === type)
    res.send(filteredBounties)
})

// Delete One
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send(`Successfully removed bounty!`)
})

// Update One
bountyRouter.put("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const updateObject = req.body
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], updateObject)
    res.send(updatedBounty)
})

bountyRouter.route("/")
    // Get All
    .get((req, res) => {
        res.send(bounties)
    })

    // Post One
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuidv4()
        bounties.push(newBounty)
        res.send(newBounty)
    })

module.exports = bountyRouter