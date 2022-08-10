import HttpStatus from 'http-status-codes';
import { Http } from 'winston/lib/winston/transports';
import * as wishlistService from '../services/wishlist.service';

/**
 * Controller to create a new wishlist
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addBookToWishlist = async (req, res, next) => {
    try {
        const data = await wishlistService.addBookToWishlist(req.body.email, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'User Wishlist created successfully'
        });
    } catch (error) {
        req.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        })
    }
};

/**
* Controller to delete a book from wishlist
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const removeBookFromWishlist = async (req, res, next) => {
    try {
        const data = await wishlistService.removeBookFromWishlist(req.body.email, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book removed from Wishlist successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
* Controller to get books from wishlist
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const getWishlistBooks = async (req, res, next) => {
    try {
        const data = await wishlistService.getWishlistBooks(req.body.email);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Books Fetched from Wishlist successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};