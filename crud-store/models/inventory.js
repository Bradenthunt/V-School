const mongoose = require('mongoose')
const Schema = mongoose.Schema

const inventorySchema = new Schema ({
    itemName: {
        type: String,
        required: true
    },
    itemDescription: {
        type: String,
        required: true
    },
    itemPrice: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Inventory", inventorySchema)