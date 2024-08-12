// user defined error class in JS 
// The Error object can be used as a base object for user defined exceptions

class BaseError extends Error{
    constructor(name, statusCode,description , details){
        super(description);
            this.name= name ; 
            this .statusCode=statusCode;
            this.details=details;
    }
}

module.exports = BaseError;