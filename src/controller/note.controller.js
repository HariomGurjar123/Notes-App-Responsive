import { Note } from "../models/note.model.js";
import { ApiError } from "../util/ApiError.js";
import { ApiResponse } from "../util/ApiResponse.js";
import { asyncHandler } from "../util/asyncHandler.js";

const createNotes = asyncHandler(async(req,res)=>{
    const {title, descrip, email} = req.body;
    const note = await Note.create({
            email,
            title,
            descrip
         });

     
         if(!note)
         {
             throw new ApiError(400,"Note not created yet")
         }
    return res
    .status(200)
    .json(new ApiResponse(200,note,"Note created successfully"))
   
});

const createImportantNote = asyncHandler(async(req,res)=>{
    const {title, descrip, email} = req.body;
    const note = await Note.create({
            email,
            title,
            descrip,
            important: true
         });
     
         if(!note)
         {
             throw new ApiError(400,"Imp Note not created yet")
         }
    return res
    .status(200)
    .json(new ApiResponse(200,note,"Important Note created successfully"))
   
});


const getNotes = asyncHandler(async(req,res)=>{
    const notes = await Note.find({email:req.body.email});
    return res
    .status(200)
    .json(new ApiResponse(200,notes,"Notes getted successfully"))

})
const getImpNotes = asyncHandler(async(req,res)=>{
    const Impnotes = await Note.find({email:req.body.email});
    return res
    .status(200)
    .json(new ApiResponse(200,Impnotes,"Notes getted successfully"))

})

const countsimpleNotes = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    const notes = await Note.find({email})
    const countingNotes = notes.filter(element=>element.important==false)
   
    return res
    .status(200)
    .json(new ApiResponse(200,countingNotes,"notes count got"))
})


const countImpNotes = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    const notes = await Note.find({email})
    const countingImpNotes = notes.filter(element=>element.important==true)
   
    return res
    .status(200)
    .json(new ApiResponse(200,countingImpNotes,"notes count got"))
});

const deleteNote = asyncHandler(async(req,res)=>{
    const {email} = req.body;
    const deleteNotes = await Note.findOneAndDelete({email})

    return res
    .status(200)
    .json(new ApiResponse(200,deleteNotes,"note deleted"))

})


export {
    createNotes,
    createImportantNote,
    getNotes,
    getImpNotes,
    countsimpleNotes,
    countImpNotes,
    deleteNote
}