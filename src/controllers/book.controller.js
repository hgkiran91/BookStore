import HttpStatus from 'http-status-codes';
import * as bookService from '../services/book.service';

/**
 * Controller to get all books available
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getALLBooks = async (req, res, next) => {
  try {
    const data = await bookService.getALLBooks();
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All users fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single book
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const getBook = async (req, res, next) => {
    try {
        const data = await bookService.getBook(req.params._id);
        res.status(HttpStatus.OK).json({
            code: HttpStatus.OK,
            data: data,
            message: 'Book fetched successfully'
        });
    } catch (error) {
        next(error);
    }
};