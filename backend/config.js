import mongoose from "mongoose";
export const PORT = 3000;
export const MONGODB_CONNECTION = async()=>{
    await mongoose.connect('mongodb://0.0.0.0:27017/BookStore')
}
   