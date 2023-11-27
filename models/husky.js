const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
    win: Number,
    loss: Number,
    finalScore: Number,
    quarterlyScore: [Number]
}, {
    timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)