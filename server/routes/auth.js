import express from 'express';
const router = express.Router();

import {register, login} from '../controllers/auth.js';


router.route('/reg').post(register);
router.route('/log').post(login);

export default router;