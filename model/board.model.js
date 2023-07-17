const mongoose=require("mongoose")



const subtaskSchema=mongoose.Schema({
    title:{type:String},
    isComplete:{type:Boolean}
})

const taskSchema=mongoose.Schema({
    title:{type:String},
    description:{type:String},
    status:{type:String},
    subtask:[subtaskSchema]
})


const boardSchema=mongoose.Schema({
    name:{type:String,require:true},
    task:[taskSchema]
})


const BoardModel=mongoose.model("board",boardSchema)
module.exports={
    BoardModel
}