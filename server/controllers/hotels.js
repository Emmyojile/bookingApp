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

//Get All Hotels
export const getAllHotels = async (req, res, next) => {    
    try {
        const { featured, name, sort, fields} = req.query;
        const queryObject = {};

        if (featured){
            queryObject.featured = featured === 'false' ? false : true;
        }

        if (name){
            queryObject.name = {$regex: name, $options: 'i'};
        }
        
        let result = Hotel.find(queryObject);
        //sort results
        if(sort){
            const sortList = sort.split(',').join(' ')
            result = result.sort(sortList);
        } else {
            result = result.sort('createdAt');
        }
        //fields options
        if(fields){
            const fieldsList = fields.split(',').join(' ')
            result = result.select(fieldsList);
        }
        //limits options
        const limit = Number(req.query.limit) || 5
        
        const allHotels = await result.limit(limit);
        return res.status(200).json({Total: allHotels.length,allHotels})
    } catch (err) {
        console.error(err)
        next(err);
    }
}

// Get All Hotels
// export const getAllHotels = async (req, res, next) => {    
//     try {
//         const limit = Number(req.query.limit) || 1;
//         const allHotels = await Hotel.find(req.query).limit(limit);
//         console.log(req.query.limit);
//         console.log(req.query);
//         console.log(allHotels);
//         return res.status(200).json(allHotels)
//     } catch (err) {
//         console.error(err)
//         next(err);
//     }
// }




// Get Hotels by Count
export const countByCity = async (req, res, next) => {    
        const cities = req.query.cities.split(',');
    try {
        const list = await Promise.all(cities.map(city => {
            return Hotel.countDocuments({city: city})
        }))
        return res.status(200).json(list)
    } catch (err) {
        next(err);
    }
}  

//Get Properties by type
export const countByType = async (req, res, next) => {    
    try {
        const hotelCount = await Hotel.countDocuments({type: "hotel"});
        const apartmentCount = await Hotel.countDocuments({type: "apartment"});
        const resortCount = await Hotel.countDocuments({type: "resort"});
        const villaCount = await Hotel.countDocuments({type: "villa"});
        const cabinCount = await Hotel.countDocuments({type: "cabin"});

        res.status(200).json([
            {type: "hotel", count: hotelCount},
            {type: "apartments", count: apartmentCount},
            {type: "resorts", count: resortCount},
            {type: "villas", count: villaCount},
            {type: "cabins", count: cabinCount},
        ])
    } catch (err) {
        next(err);
    }
}