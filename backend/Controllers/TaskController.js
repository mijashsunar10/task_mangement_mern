const TaskModel = require("../Models/TaskModel");

const createTask = async(req,res)=>
{
    const data = req.body;

    try{

        const model = new TaskModel(data);
        await model.save();
        res.status(201).json({message: "Task created successfully", success:true});

    }
    catch(err)
    {
        res.status(500).json({message: "Server Error", error: err.message});
    }
}

const fetchAllTask = async(req,res)=>
{
   

    try{

        const data = await TaskModel.find({});
        // await model.save();
        res.status(201).json({message: "ALl Tasks", success:true,data});

    }
    catch(err)
    {
        res.status(500).json({message: "Server Error", error: err.message});
    }
}


    module.exports = {createTask, fetchAllTask

}