import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    }
});

const bookModel = mongoose.model('Book', bookSchema);
export { bookModel as Book }