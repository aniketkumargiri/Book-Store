import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    roll: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    }
});

const studentModel = mongoose.model('Student', studentSchema);
export { studentModel as Student }