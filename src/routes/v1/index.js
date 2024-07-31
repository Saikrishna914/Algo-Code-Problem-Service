const express = require('express');
const ProblemRouter  = require('./problems.routes');
const v1Router = express.Router();


// if any request comes and route continues with /problems, we map it to ProblemRouter
v1Router.use('/problems', ProblemRouter);
module.exports =v1Router;