import HttpStatus from 'http-status-codes';
import * as cartService from '../services/cart.service';

/**
 * Controller to create a new cart
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addBookToCart = async (req, res, next) => {
    try {
        const data = await cartService.addBookToCart(req.body.email, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'User Cart created successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
* Controller to delete a book from cart
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const removeBook = async (req, res, next) => {
    try {
        const data = await cartService.removeBook(req.body.email, req.params._id);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Book removed successfully'
        });
    } catch (error) {
        next(error);
    }
};

/**
* Controller to get books from cart
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const getCartBooks = async (req, res, next) => {
    try {
        const data = await cartService.getCartBooks(req.body.email);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Books Fetched from Cart successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};

/**
* Controller for isPurchased
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const purchased = async (req, res, next) => {
    try {
        const data = await cartService.purchased(req.body.email);
        res.status(HttpStatus.CREATED).json({
            code: HttpStatus.CREATED,
            data: data,
            message: 'Books Fetched from Cart successfully'
        });
    } catch (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`
        });
    }
};