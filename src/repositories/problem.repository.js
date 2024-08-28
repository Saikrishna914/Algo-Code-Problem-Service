const logger = require('../config/logger.config');
const NotFound = require('../errors/NotFound.error');
const { Problem }  = require('../models') ; 

class ProblemRepository  { 

    async createproblem(ProblemData){
        try {
            const problem  = await Problem.create({
                title:ProblemData.title,
                description: ProblemData.description,
                testCases:(ProblemData.testCases)  ? (ProblemData.testCases) : []
            });
            return problem;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async getallproblems(){
        try {
            const problems= await Problem.find({});
            return problems;
        } catch (error) {
            console.log(error);
            throw error
        }
    }

    async getproblem(id){
        try {
            const problem = await Problem.findById(id);
            // logger.error(`Problem with id : ${id} not found`);
            if(!problem){
                throw new NotFound("problem", id);
            }
            return problem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteProblem(id){
        try {
             const deletedproblem = await Problem.findByIdAndDelete(id);
             if(!deletedproblem){
                logger.error(`Problem.Repository : Problem with id : ${id} not found`);
                throw new NotFound("problem", id);
             }
             return deletedproblem;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async updateProblem(id,resource){
        try {
            const updatedproblem = await Problem.findByIdAndUpdate(id,resource);
            if(!updatedproblem){
                throw new NotFound("problem",id);
            }
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = ProblemRepository ;