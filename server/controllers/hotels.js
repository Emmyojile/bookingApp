import Hotel from "../models/Hotel.js";

//Create Hotel
export const createHotel = async (req, res) => {
    const newHotel = new Hotel(req.body);
    try {
        const savedHotel = await newHotel.save();
        return res.json(savedHotel)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"})
    }
}

//Update Hotel
export const updateHotel = async (req, res) => {    
    try {
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        return res.json(updatedHotel)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"})
    }
}

//Delete Hotel
export const deleteHotel = async (req, res) => {    
    try {
        await Hotel.findByIdAndDelete(req.params.id);
        return res.json("Hotel deleted Successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"})
    }
}

//Get Single Hotel
export const singleHotel = async (req, res) => {    
    try {
        const hotel = await Hotel.findById(req.params.id);
        return res.json(hotel)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"})
    }
}

//Get All Hotel
export const getAllHotels = async (req, res) => {    
    try {
        const allHotels = await Hotel.find();
        return res.json(allHotels)
    } catch (error) {
        console.error(error);
        return res.status(500).json({error:"Internal Server Error"})
    }
}