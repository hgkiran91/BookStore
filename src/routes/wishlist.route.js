import express from 'express';
import { userAuth } from '../middlewares/auth.middleware';
import * as wishlistController from '../controllers/wishlist.controller';

const router = express.Router();

//route to post book to wishlist
router.post('/:_id', userAuth, wishlistController.addBookToWishlist);

//route to remove book from wishlist
router.put('/:_id', userAuth, wishlistController.removeBookFromWishlist);

//route to get books from wishlist
router.get('', userAuth, wishlistController.getWishlistBooks);

export default router;