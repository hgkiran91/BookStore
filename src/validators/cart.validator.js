import joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';

export const newCartValidator = (req, res, next) => {
    const schema = joi.object({
        books: [{
            productId: joi.string().required(),
            description: joi.string().required(),
            bookName: joi.string().required(),
            bookImage: joi.string().required(),
            author: joi.string().required(),
            quantity: joi.string().required(),
            price: joi.string().required()
        }],
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