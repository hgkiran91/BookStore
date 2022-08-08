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
        message: 'User created successfully'
      });
    } catch (error) {
      next(error);
    }
  };