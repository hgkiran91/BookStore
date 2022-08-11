import express from 'express';
import * as userDetailsController from '../controllers/userDetails.controller';
import { userDetailsValidator } from '../validators/userDetails.validator';

const router = express.Router();

//route to add userDetails
router.post('', userDetailsValidator, userDetailsController.addUserDetails);

export default router;