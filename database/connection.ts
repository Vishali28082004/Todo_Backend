import mongoose from "mongoose";
import config from "../config/index";

let connectionCounter = 0;

export default function connectDatabase (callback: (isConnected: boolean) => void){
    console.log('MONGO_URL from config:', config.MONGO_URL);
    console.log('Type:', typeof config.MONGO_URL);
    
    mongoose.connect(`${config.MONGO_URL}`)
    .then(()=>{
        console.log('Database Connected successfully');
        return callback(true)
    })
    .catch((err)=>{
        console.log('err: ', err);
    })
}