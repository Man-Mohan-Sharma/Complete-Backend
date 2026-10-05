import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    context: {
        type: string,
        
    }

},{timestamps: true});

export const Todo = mongoose.model("Todo",todoSchema);