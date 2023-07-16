import mongoose from "mongoose";
const schema = new mongoose.Schema(
    {
        name:String,
        email: String,
        password: String,
        age:Number,
    }   
);

export default mongoose.model("User", schema)