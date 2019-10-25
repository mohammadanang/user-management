const mongoose = require("mongoose")
const Schema = mongoose.Schema

const roleSchema = new Schema({
    name: String,
    permissions: Array,
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

const Role = mongoose.model("Role", roleSchema)

module.exports = Role
