const express = require ("express");
const zod = require("zod");
const { User } = require("../db")
const JWT_SECRET = require("../config");
const jwt = require ( "jsonwebtoken")
const router = express.Router();

const signupSchema = zod.object({
    username : zod.string().email(),
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string()
    
})

router.post('/signup', async(req,res)=>{
    const body = req.body;
    const { success } = signupSchema.safeParse(req.body);
    if(!success){
        res.json({
            message : "email already taken / incorrect inputs"
        })
    }

    const user = User.findOne({
        username: body.username
    })

    if (user._id){
        return res.json({
            message: "email already taken / choose another email"
        })
    }

    const dbUser = await User.create(body);
    const token = jwt.sign({
        userId : dbUser._id 
    } , JWT_SECRET)
    res.json({
        message: "account created successfully",
        token: token
    })
})

module.exports = router;