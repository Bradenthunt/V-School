const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Finalize
const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    workout: {
        type: Schema.Types.ObjectId,
        ref: "Workout",
        required: true
    }
})

module.exports = mongoose.model('Exercise', exerciseSchema)