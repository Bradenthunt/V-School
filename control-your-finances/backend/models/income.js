const mongoose = require('mongoose')
const Schema = mongoose.Schema

const incomeSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        // enum: ['job', 'side hustle', 'other'],
        required: true
    },
    amount: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("Income", incomeSchema)