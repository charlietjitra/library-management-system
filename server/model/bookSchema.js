import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
    bookName:{type:String, required: true},
    author:{type:String, required: true},
    publishYear:{type: Number, required: true},
    country:{type:String, required:true}
    },
    {
        timestamps:true
    }
)

const Book = mongoose.model('Book', bookSchema);

export default Book;