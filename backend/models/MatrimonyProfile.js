import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
    userIdRef: { type: String },
    height: { type: Number },
    weight: { type: Number },
    hobbies: { type: [String] },
    address: { type: String},
    bodyType: { type: String},
    maritalStatus: { type: String},
    religion: { type: String},
    caste: { type: String},
    preference: { type: String},
    motherTongue: { type: String},
    languagesKnown: { type: [String]},
    familyType: { type: String},
    motherName:{type: String},
    fatherName:{type: String},
    fatherOccupation:{type: String},
    motherOccupation:{type: String},
    sibilng:{type: String},
    horoscope: { type: String},
    photos: { type: [String]},
    videos: { type: [String]}
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;