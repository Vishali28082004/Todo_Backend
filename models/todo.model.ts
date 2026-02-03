import  { Schema, model, Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description?: string;
}


const TodoSchema = new Schema<ITodo>({
    title : {
        type : String,
        required : true,
        index : true
    },


    description :{
        type : String,
    },
} , {timestamps:true})


export const TodoData = model<ITodo>("TodoDetails",TodoSchema )