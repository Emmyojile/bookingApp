import express from 'express';
const router = express.Router();
import { verifyToken, verifyUser, verifyAdmin } from '../utils/verifyToken.js';

import {updateUser, deleteUser, singleUser, getAllUsers} from '../controllers/users.js';


router.get('/checkAuth', verifyToken, (req, res, next) => {
    res.send("Hello user, you are now logged in")
})
router.get('/checkUser/:id', verifyUser, (req, res, next) => {
    res.send("Hello user, you are now logged in and can delete it")
})
router.get('/checkAdmin/:id', verifyAdmin, (req, res, next) => {
    res.send("Hello admin, you are now logged in and can delete ALLLLLLLL")
})

router.route('/:id').put(verifyUser, updateUser);

router.route('/:id').delete(verifyUser, deleteUser);

router.route('/:id').get(verifyUser, singleUser);

router.route('/').get(verifyAdmin, getAllUsers);


export default router;