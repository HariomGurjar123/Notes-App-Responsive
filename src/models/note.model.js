import mongoose, { Schema } from 'mongoose';

const noteSchema  = new Schema(
    {  
        email:{type:String,required:true},
        title:{type:String,required:true,unique:true,sparse:false},
        descrip:{type:String,required:true,unique:true,sparse:false},
        important:{ type: Boolean, default: false },
    }
    ,{timestamps:true})

    export const Note = mongoose.model("Note",noteSchema);