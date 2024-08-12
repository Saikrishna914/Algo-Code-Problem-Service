const sanitizemarkdowncontent = require("../utils/markedsanitize")



class ProblemService { 
    constructor(ProblemRepository){
        this.ProblemRepository=ProblemRepository;
    }

    async createproblem(ProblemData){
            ProblemData.description=sanitizemarkdowncontent(ProblemData.description);
            const problem = await this.ProblemRepository.createproblem(ProblemData);
            return problem;
    }


    async getallproblems(){
            const problems = await this.ProblemRepository.getallproblems();
            return problems;
    }

    async getproblem(problemid){
            const problem = await this.ProblemRepository.getproblem(problemid);
            return problem;
    }

    async deleteProblem(problemid){
            const problem = await this.ProblemRepository.deleteProblem(problemid);
            return problem;
    }

    async updateProblem(problemid,updatedresource){
        updatedresource.description = sanitizemarkdowncontent(updatedresource.description)
        const problem = await this.ProblemRepository.updateProblem(problemid,updatedresource);
        return problem ; 
    }
}


module.exports = ProblemService;