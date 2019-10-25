const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    username: String,
    email: String,
    password: String,
    phone: String,
    activation_at: {
        type: Date,
        default: null
    },
    activation_token: {
        type: String,
        default: null
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
    }
})

const User = mongoose.model("User", userSchema)

module.exports = User
