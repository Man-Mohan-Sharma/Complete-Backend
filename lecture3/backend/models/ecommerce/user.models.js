import mongoose, { trusted } from 'mongoose'

const UserSchema = new mongoose.Schema({

    usernamer: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true
    },
},{timestamps:true})

export const User = mongoose.model("User",UserSchema);