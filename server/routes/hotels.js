import express from 'express';
const router = express.Router();
import {verifyAdmin } from '../utils/verifyToken.js';


import {createHotel, updateHotel, deleteHotel, singleHotel, getAllHotels, countByCity, countByType, getHotelRooms} from '../controllers/hotels.js';


router.route('/').post(verifyAdmin, createHotel);

router.route('/:id').put(verifyAdmin, updateHotel);

router.route('/:id').delete(verifyAdmin, deleteHotel);

router.route('/singleHotel/:id').get(singleHotel);

router.route('/').get(getAllHotels);
router.route('/countByCity').get(countByCity);
router.route('/countByType').get(countByType);
router.route('/rooms/:id').get(getHotelRooms);



export default router;
