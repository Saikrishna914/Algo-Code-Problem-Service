const BaseError = require('./Base.error');
const {StatusCodes} = require('http-status-codes')


class BadRequest extends BaseError { 
    constructor(propertyname,details){
        super("Bad request" , StatusCodes.BAD_REQUEST, `Invalid structure for ${propertyname} provided `,details)
    }
}

module.exports = BadRequest ; 