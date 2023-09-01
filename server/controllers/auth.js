import User from "../models/User.js";
import {createError} from "../utils/error.js";


export const register = async (req, res, next) => {    
    try {
        const {username, email, password} = req.body;
        // if(!username || !password || !email) {
        //     res.json({error: "Please provide all required fields"})
        // }
        
        // const userNameExists = await User.findOne({username})
        // if(userNameExists) {
        //     res.json({error: 'This username is already taken'})
        // }

        const newUser = await User.create({...req.body})
        return res.status(201).json("User created successfully");
    } catch (err) {
        next(err);
    }
}

export const login = async (req, res, next) => {    
    try {
        const user = await User.findOne({username: req.body.username});
        if(!user) 
            return next(createError(404, "User not found ooo!"));
        

        const suppliedPassword = await user.comparePassword(req.body.password, user.password);
        if(!suppliedPassword) {
            return next(createError(400, "Password incorrect!"))
        }

        const token = user.createJWT()
        const {password, isAdmin, ...otherDetails} = user._doc;

        return res.cookie("access_token", token,{httpOnly: true,}).status(200).json({...otherDetails});
    } catch (err) {
        next(err);
    }
}