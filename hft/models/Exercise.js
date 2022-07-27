const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Finalize
const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number, 
        required: true
    },
    notes: {
        type: String
    },
    // workout: {
    //     type: Schema.Types.ObjectId,
    //     ref: "Workout",
    //     required: true
    // }
})

module.exports = mongoose.model('Exercise', exerciseSchema)