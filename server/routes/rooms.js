import express from 'express';
const router = express.Router();
import {verifyAdmin } from '../utils/verifyToken.js';


import {createRoom, updateRoom, deleteRoom, singleRoom, getAllRooms, updateRoomAvailability} from '../controllers/rooms.js';


router.route('/:hotelId').post(verifyAdmin, createRoom);

router.route('/:id').put(verifyAdmin, updateRoom);
router.route('/availability/:id').put(updateRoomAvailability);

router.route('/:id/:hotelId').delete(verifyAdmin, deleteRoom);

router.route('/:id').get(singleRoom);

router.route('/').get(getAllRooms);


export default router;