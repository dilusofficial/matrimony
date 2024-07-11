import express from "express"
import passport from "passport"
import twilio from 'twilio'
import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
import {Login, Register, getUserData, otp_sent, verify_otp} from "../controllers/authControl.js"
import { verifyToken, verifyUser } from "../utils/verifyToken.js"
import { createError } from "../utils/error.js"

const router = express.Router()
dotenv.config()
 
const accoundSid = process.env.accoundSid
const authtoken = process.env.authtoken

const client = twilio(accoundSid,authtoken)
const otps = {};

router.post('/login', Login)

router.put('/register/:userId', Register)

//dummy token verification
router.get('/checkauthenticated',verifyToken,(req,res,next)=>{
    res.json({message:"you are authenticated",user:req.user})
})

router.get('/checkUserAuthentication/:id',verifyUser,(req,res,next)=>{
    try {
        res.json({message:"you are authenticated",user:req.user})
    } catch (error) {
        next(error)
    }
    
})

router.get('/checkAdminAuthentication',verifyUser,(req,res,next)=>{
    try {
        res.json({message:"you are authenticated",user:req.user})
    } catch (error) {
        next(error)
    }
    
})
//for dummy purpose
router.post('/register')

router.get('/user/:userId',verifyUser,getUserData);

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));



router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: 'http://localhost:8003/api/auth/login' }),
    (req, res) => {
        const isNew = req.user.isNew; 
        const userId = req.user.user._id;
        const user = req.user.user;
        console.log(user);
        const userPwd = req.user.user.password;
        console.log("userPassword",userPwd);
        const token = jwt.sign({
            userId
        },
        process.env.JWT, // Make sure to use the correct environment variable
        {expiresIn: '3h'}
    );
        if (user.password==="") {
            res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 36000000 });
            res.redirect(`http://localhost:5173/register/${userId}`);
            
        } else {
            res.cookie('token', token, { httpOnly: true, secure: false, maxAge: 36000000 });
            res.redirect('http://localhost:5173/home');
        }
    }
);


router.post('/send-otp',otp_sent)

router.post('/verify-otp',verify_otp);

export default router;