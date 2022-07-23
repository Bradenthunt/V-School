const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Finalize
const workoutSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    exercises: {
        type: Array
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = mongoose.model('Workout', workoutSchema)