import express from 'express';
const router = express.Router();

import authRoutes from "./auth.js";
import userRoutes from "./users.js";
import roomRoutes from "./rooms.js";
import hotelRoutes from "./hotels.js";

router.use('/', authRoutes);
router.use('/user', userRoutes);
router.use('/room', roomRoutes);
router.use('/hotel', hotelRoutes);

export default router;
