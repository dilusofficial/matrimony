import Profile from "../models/MatrimonyProfile.js";

export const createProfile = async(req,res)=>{
    try {
        const newProfile = new Profile(req.body);
        await newProfile.save()
        res.status(201).json(newProfile);
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}