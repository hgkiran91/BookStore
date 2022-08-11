import HttpStatus from 'http-status-codes';
import * as userDetailsService from '../services/userDetails.service';

/**
 * Controller to create a new userDetails
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
 export const addUserDetails = async (req, res, next) => {
    try {
      const data = await userDetailsService.addUserDetails(req.body);
      res.status(HttpStatus.CREATED).json({
        code: HttpStatus.CREATED,
        data: data,
        message: 'User Details created successfully'
      });
    } catch (error) {
      next(error);
    }
  };