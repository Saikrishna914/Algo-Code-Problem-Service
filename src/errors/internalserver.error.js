const BaseError = require('./Base.error');
const {StatusCodes} = require('http-status-codes')


class InternalServer extends BaseError { 
    constructor(methodname){
        super("Not implemented" , StatusCodes.NOT_IMPLEMENTED, `${methodname} Something went wrong  `, {});
    }
}

module.exports = InternalServer ; 