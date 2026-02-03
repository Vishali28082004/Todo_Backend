import { TodoData } from "../models/todo.model"
import { Request, Response } from "express";

const createData = async (req: Request,res: Response) =>{
    const {title,description} = req.body;
    console.log('req.body: ', req.body);
    const info = await TodoData.create({title,description})

    return res.status(201).json({
        status : "Success",
        message : "Todo Created Successfuly",
        data : info
    })
}

const getAllData = async (req: Request,res:Response)=>{
    const info = await TodoData.find();

    return res.status(200).json({
        status : "success",
        message : "Todo Fetched Succesfully",
        data: info
    })
}

const getById = async(req: Request,res: Response)=>{
    const {todoId} = req.params
    const info = await TodoData.findById(todoId)

    if(!info){
             return res.status(400).json({
            status:"failure",
            message:"Todo Not Found"
        })
    }

    return res.status(200).json({
        status:"success",
        message: "Todo Fetched Successfully",
        data: info
    })
}

const updateData = async(req:Request,res:Response) =>{
    const {todoId} = req.params
    const {title,description} = req.body;
    const info = await TodoData.findByIdAndUpdate(todoId,
        {
            $set:{
               title,description
            }
        },
        {
            new: true
        }
    )

    if(!info){
        return res.status(400).json({
            status:"failure",
            message:"Todo Not Found"
        })
    }

    return res.status(200).json({
        status:"success",
        message: "Todo Updated Successfully",
        data: info
    })
}

const deleteData = async(req:Request,res:Response) =>{
    const {todoId} = req.params

    const info = await TodoData.findByIdAndDelete(todoId)

    if(!info){
        return res.status(400).json({
            status: "failure",
            message : "Todo Not Found"
        })
    }
    return res.status(200).json({
        status :"Todo Deleted Successfully",
    })
}

export {createData, getAllData, getById, updateData, deleteData}