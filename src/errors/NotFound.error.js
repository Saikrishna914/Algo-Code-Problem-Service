const BaseError = require('./Base.error');
const {StatusCodes} = require('http-status-codes')


class NotFound extends BaseError { 
    constructor(resourcename,resourcevalue){
        super("Not found" , StatusCodes.NOT_FOUND, `The requested request for ${resourcename} with value ${resourcevalue} not found`,{
            resourcename,
            resourcevalue
        })
    }
}

module.exports = NotFound ; 