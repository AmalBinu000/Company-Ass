import UserData from "../models/noteModel.js";


export const getUser = async(req,res)=>{
    try {
        const notes = await UserData.find()
        res.status(201).json(notes)
    } catch (error) {
        res.status(500).json({message:"server error"})
    }
}


export const postUser = async(req,res)=>{
    try {
        const {title,content} = req.body 
        const newNote = new UserData({title,content})
        await newNote.save()
        res.status(201).json(newNote)
    } catch (error) {
        res.Status(500).json({message:"note not found"})
    }
}

export const getUserById = async(req,res)=>{
    try {
        const note = await UserData.findById(req.params.id)

        if(!note){
            return res.status(404).json({message:"Not found"})
        }

        res.status(201).json(note)
    } catch (error) {
        console.error('Error fetching note by ID:', error.message);
        res.status(500).json({ message: 'Server Error' });
    }
}


export const patchUser = async(req,res)=>{
    try {
        const note = await UserData.findByIdAndUpdate(req.params.id,req.body,{new:true});

        if(!note){
            return res.status(404).json({message:"Note not found"})
        }
        
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json({message:"server Error"})
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const note = await UserData.findByIdAndDelete(req.params.id);

        if(!note){
            return res.status(404).json({message:"Not found"})
        }

        res.status(201).json(note)
        
    } catch (error) {
        res.status(500).json({message:"Server Error"})
        
    }
}