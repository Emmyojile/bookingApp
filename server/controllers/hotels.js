import Hotel from "../models/Hotel.js";
import {createError} from "../utils/error.js";

//Create Hotel
export const createHotel = async (req, res, next) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        return res.status(200).json(savedHotel)
    } catch (err) {
        next(err);
    }
}

//Update Hotel
export const updateHotel = async (req, res, next) => {    
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        return res.status(200).json(updatedHotel)
    } catch (err) {
        next(err);
    }
}

//Delete Hotel
export const deleteHotel = async (req, res, next) => {    
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        return res.status(200).json("Hotel deleted Successfully");
    } catch (err) {
        next(err);
    }
}

//Get Single Hotel
export const singleHotel = async (req, res, next) => {    
    try {
        const hotel = await Hotel.findById(req.params.id);
        return res.status(200).json(hotel)
    } catch (err) {
        next(err);
    }
}

//Get All Hotel
export const getAllHotels = async (req, res, next) => {    
    try {
        const allHotels = await Hotel.find();
        return res.status(200).json(allHotels)
    } catch (err) {
        next(err);
    }
}