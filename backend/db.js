const mongoose = require("mongoose");
const { string } = require("zod");

mongoose.connect("mongodb+srv://shravani14100:12345654321@cluster0.dcsom.mongodb.net/");

const userSchema = mongoose.Schema({
    username : String,
    password : String,
    firstName : String,
    lastName : String,
})

const User = mongoose.model("User",userSchema)

module.exports ={
    User
}