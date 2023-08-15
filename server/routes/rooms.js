import express from 'express';
const router = express.Router();

import {} from '../controllers/rooms.js';


router.route('/').get(getAllRecipes);
router.route('/').post(verifyToken, createRecipe);

export default router;