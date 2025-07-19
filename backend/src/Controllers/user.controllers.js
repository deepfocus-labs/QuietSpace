import { User } from "../Models/user.models.js";
import { ApiResponse } from "../Utils/apiResponse.js";
import { asyncHandler } from "../Utils/asyncHandler.js";
import mongoose from "mongoose";


const registerUser = asyncHandler(async (req,res) => {
  
    //get user details from frontend
    console.log(req.body);
    const {Username, email, password} = req.body
    console.log(Username);


    //checks if any field is empty 
    if([Username, email, password].some((field) => field?.trim() === "" )){
        console.log("All fields Required");
    }

    //check if User already exists
    const existedUser = await User.findOne({
        $or : [{Username},{email}]
    })
    if(existedUser){
        console.log("user Already Exists");
        return res.status(409);
    }else{
        console.log("new Registration started")
    }

    //Create new User if above is false
    const newUser = await User.create({
        username:Username,
        email,
        password
    })

    const createdUser = await User.findById(newUser._id).select("-password");

    if(!createdUser){
        console.log("Something went wrong while registering the user");
    }

    return res.status(201).json(
        new ApiResponse(201, createdUser, "User registration Sucessful")
    )
})

export {registerUser};