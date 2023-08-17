import express from 'express';
const router = express.Router();
import {verifyAdmin } from '../utils/verifyToken.js';


import {createHotel, updateHotel, deleteHotel, singleHotel, getAllHotels} from '../controllers/hotels.js';


router.route('/').post(verifyAdmin, createHotel);

router.route('/:id').put(verifyAdmin, updateHotel);

router.route('/:id').delete(verifyAdmin, deleteHotel);

router.route('/:id').get(singleHotel);

router.route('/').get(getAllHotels);


export default router;