import express from 'express';
import * as bookController from '../controllers/book.controller';
import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

//get all books
router.get('', bookController.getALLBooks);

//get single book by id
router.get('/:_id', bookController.getBook);

export default router;