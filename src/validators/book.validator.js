import joi from '@hapi/joi';
import HttpStatus from 'http-status-codes';

export const newBookValidator = (req, res, next) => {
    const schema = joi.object({
        description: joi.string().required(),
        discountPrice: joi.string().required(),
        bookImage: joi.string().required(),
        admin_user_id: joi.string().required(),
        bookName: joi.string().required(),
        author: joi.string().required(),
        quantity: joi.string().required(),
        price: joi.string().required()
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