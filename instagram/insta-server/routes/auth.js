const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const User=mongoose.model("User")
const bycrypt=require('bcrypt')
const jwt = require('jsonwebtoken')
const {jwt_secret}=require('../secret')
const requireLogin=require('../middleware/requireLogin')

router.post('/signup/',
   (req,res)=>{
    const {name,email,password} = req.body

    //check all the valus are not empty
    if(!name || !email ||!password)
    {
        res.json({error:"please add all fields"})
    }
    // res.json({message:"successfully passed"})

    //check if password is strong or not

    //check if email is valid or not

    //check if email is alredy in database or not 
    User.findOne({email:email})
    .then(
        (savedUser)=>{
            if(savedUser!=null){
                return res.status(400).json({error:"user is already exits with this email"})
            }
            //if uder doesn't exist . create a new user
            bycrypt.hash(password,12)
            .then(
                (hashPassoword)=>{
                    const user=new User(
                        {
                            name,
                            email,
                            password:hashPassoword
                        }
                    )
                    user.save()
                    .then(
                        User=>{
                            res.json({message:"saved successfully"})
                        }
                    )
                    .catch(
                        err=>{
                            console.log(err)
                        }
                    )

                }
            )
           
        }
    )
    .catch(
        err=>{
            console.log(err)
        }
    )




})


router.post('/signin/',
   (req,res)=>{
    const {email,password} = req.body
    //check all the valus are not empty
    if(!email ||!password)
    {
      return  res.status(400).json({error:"please add email and password"})
    }
    User.findOne({email:email})
    .then(
        (savedUser)=>{
            if(!savedUser){
               return res.status(400).json({error:"invalid user or password"})
            }
            bycrypt.compare(password,savedUser.password)
            .then(
                (doMatch)=>{
                    if(doMatch==true){
                        const token=jwt.sign({_id:savedUser._id},jwt_secret)
                        res.json({message:"sign in sucessfully",token:token})
                    }
                    else{
                        return res.status(400).json({error:"invalid user or password"})
                    }
                }
            )  
            
        }
    )



})


// router.get('/topsecret',requireLogin,(req,res)=>{
//     // console.log(req.headers)
//     // console.log(req.user)
//     res.send("let's talk on call")
// })


module.exports=router
