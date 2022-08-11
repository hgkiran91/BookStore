import joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';

export const userDetailsValidator = (req, res, next) => {
    const schema = joi.object({
        Name: joi.string().required(),
        PhoneNumber: joi.string().required(),
        Pincode: joi.string().required(),
        Locality: joi.string().required(),
        Address: joi.string().required(),
        City: joi.string().required(),
        Landmark: joi.string().required(),
        Type: joi.string().optional()
    });
    const { error, value } = schema.validate(req.body);
    if (error) {
        res.status(HttpStatus.BAD_REQUEST).json({
            code: HttpStatus.BAD_REQUEST,
            message: `${error}`,
        });
    } else {
        // req.validateBody = value;
        next();
    }
};