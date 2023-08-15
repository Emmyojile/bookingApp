import express from 'express';
const router = express.Router();

import {createHotel, updateHotel, deleteHotel, singleHotel, getAllHotels} from '../controllers/hotels.js';


router.route('/').post(createHotel);

router.route('/:id').put(updateHotel);

router.route('/:id').delete(deleteHotel);

router.route('/:id').get(singleHotel);

router.route('/').get(getAllHotels);


export default router;