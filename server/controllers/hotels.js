import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

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
        const { featured, name, sort, fields, filterOptions, min, max } = req.query;
        const queryObject = {};

        if (featured){
            queryObject.featured = featured === 'false' ? false : true;
        }

        if (name){
            queryObject.name = { $regex: name, $options: 'i' };
        }
        
        if (filterOptions){
            const operatorMap = {
                '>': '$gt',
                '>=': '$gte',
                '=' : '$eq',
                '<': '$lt',
                '<=': '$lte',
            };
            
            const regEx = /\b(<|>|>=|=|<|<=)\b/g;
            let filters = filterOptions.replace(
                regEx,
                (match) => `-${operatorMap[match]}-`
            );
            
            const options = ["cheapestPrice", "rating"];
            
            filters = filters.split(',').forEach((item) => {
                const [field, operator, value] = item.split('-');
                if (options.includes(field)){
                    queryObject[field] = { [operator]: Number(value) };
                }
            });
        }
        
        if (min) {
            queryObject.cheapestPrice = { $gte: Number(min) };
        }

        if (max) {
            queryObject.cheapestPrice = { ...queryObject.cheapestPrice, $lte: Number(max) };
        }
        
        let result = Hotel.find(queryObject);
        
        if (sort){
            const sortList = sort.split(',').join(' ')
            result = result.sort(sortList);
        } else {
            result = result.sort('createdAt');
        }
        
        if (fields){
            const fieldsList = fields.split(',').join(' ')
            result = result.select(fieldsList);
        }
        
        const limit = Number(req.query.limit) || 9;
        
        const allHotels = await result.limit(limit);
        return res.status(200).json(allHotels);
    } catch (err) {
        console.error(err);
        next(err);
    }
}



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

export const getHotelRooms = async (req, res, next) => {    
    try {
        const hotel = await Hotel.findById(req.params.id);
        const list = await Promise.all(hotel.rooms.map((room) => {
            return Room.findById(room)
        }));
        return res.status(200).json(list);
    } catch (err) {
        next(err);
    }
}
