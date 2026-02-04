import  { Schema, model, Document } from "mongoose";

export interface ITodo extends Document {
  title: string;
  description?: string;
  isCompleted: boolean;
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
    isCompleted:{
        type: Boolean,
        default:false
    }

} , {timestamps:true})


export const TodoData = model<ITodo>("TodoDetails",TodoSchema )