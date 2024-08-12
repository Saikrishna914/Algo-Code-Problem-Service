const mongoose = require('mongoose')

const ProblemSchema = new mongoose.Schema({

    title : {
        type : String,
        required : [true , "Title can't be empty"]
    } , 

    description : {
        type : String , 
        required : [true , "Description can't be empty"]
    }, 

    difficulty : {
        type : String , 
        enum : ["Easy" , "Medium" , "Hard"] , 
        default : "Easy"
    },

    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            }
        }
    ],
    
    editorial:{
        type:String 
    }


});


const Problem = mongoose.model('Problem' , ProblemSchema)

module.exports = Problem ;