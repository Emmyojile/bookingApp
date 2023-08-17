import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js";

export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body);

    try {
        const savedRoom = await newRoom.save();
        try {
            await Hotel.findByIdAndUpdate(hotelId, {$push: {rooms: savedRoom._id}})
        } catch (err) {
            next(err);
        }      
        res.status(200).json(savedRoom);
    } catch (err) {
        next(err);
    }
};

//Update Room
export const updateRoom = async (req, res, next) => {    
    try {
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        return res.status(200).json(updatedRoom)
    } catch (err) {
        next(err);
    }
}

//Delete Room
export const deleteRoom = async (req, res, next) => {    
    const hotelId = req.params.hotelId;

    try {
        await Room.findByIdAndDelete(req.params.id);

        try {
            await Hotel.findByIdAndUpdate(hotelId, {$pull: {rooms: req.params.id}});
        } catch (err) {
            next(err);
        } 
        return res.status(200).json("Room deleted Successfully");
    } catch (err) {
        next(err);
    }
}

//Get Single Room
export const singleRoom = async (req, res, next) => {    
    try {
        const room = await Room.findById(req.params.id);
        return res.status(200).json(room)
    } catch (err) {
        next(err);
    }
}

//Get All Room
export const getAllRooms = async (req, res, next) => {    
    try {
        const allRooms = await Room.find();
        return res.status(200).json(allRooms)
    } catch (err) {
        next(err);
    }
}