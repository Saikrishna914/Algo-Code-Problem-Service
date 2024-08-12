const BaseError = require('./Base.error');
const {StatusCodes} = require('http-status-codes')


class NotImplemented extends BaseError { 
    constructor(details){
        super("Not IMPLEMENTED" , StatusCodes.NOT_IMPLEMENTED, `Something went wrong  `, details)
    }
}

module.exports = NotImplemented ; 