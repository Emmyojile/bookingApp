import User from "../models/User.js";
import {createError} from "../utils/error.js";


//Update User
export const updateUser = async (req, res, next) => {    
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        return res.status(200).json(updatedUser)
    } catch (err) {
        next(err);
    }
}

//Delete User
export const deleteUser = async (req, res, next) => {    
    try {
        await User.findByIdAndDelete(req.params.id);
        return res.status(200).json("User deleted Successfully");
    } catch (err) {
        next(err);
    }
}

//Get Single User
export const singleUser = async (req, res, next) => {    
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json(user)
    } catch (err) {
        next(err);
    }
}

//Get All User
export const getAllUsers = async (req, res, next) => {    
    try {
        const allUsers = await User.find();
        return res.status(200).json(allUsers)
    } catch (err) {
        next(err);
    }
}