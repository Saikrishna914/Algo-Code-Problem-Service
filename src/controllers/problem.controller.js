const NotImplemented = require('../errors/NotImplemented')
const {ProblemService }= require('../services')
const {ProblemRepository} = require('../repositories')
const { StatusCodes, } = require('http-status-codes')


const problemservice = new ProblemService(new ProblemRepository);

function pingProblemController(req,res){
    return res.json({msg:'ok'})
};

async function addProblem(req,res,next){
    try {
        const newproblem = await problemservice.createproblem(req.body);
        return res.status(StatusCodes.CREATED).json({
            success : true,
            message : "succesfully created a new problem", 
            error : {},
            data : newproblem

        })
    } catch (error) {
        next(error)
    }
}

async function getProblem(req,res,next){
    try {
        const problem = await problemservice.getproblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "succesfully fetched a problem", 
            error : {},
            data : problem
        })
    } catch (error) {
        next(error)
    }
}

async function getProblems(req,res,next){
    try {
        const response = await problemservice.getallproblems(req.params.id);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "succesfully fetched all the problem", 
            error : {},
            data : response
        });
    } catch (error) {
        next(error)
    }
}


async function deleteProblem(req,res,next){
    try {
        const response = await problemservice.deleteProblem(req.params.id);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "succesfully deleted a problem", 
            error : {},
            data : response
        })
    } catch (error) {
        next(error)
    }
}

async function updateProblem(req,res,next){
    try {
        await problemservice.updateProblem(req.params.id,req.body);
        const response = await problemservice.getproblem(req.params.id);
        console.log(response);
        return res.status(StatusCodes.OK).json({
            success : true,
            message : "succesfully updated a problem", 
            error : {},
            data : response
        })
    } catch (error) {
        next(error)
    }
}



module.exports = {
    pingProblemController,
    getProblem,
    getProblems,
    updateProblem,
    deleteProblem,
    addProblem

}