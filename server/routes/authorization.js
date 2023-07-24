require('dotenv').config();
const express = require("express");
const Candidate = require("../model/Candidate");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { verifyCandidateToken } = require('../middleware/authorize');
const JWT_SECRET = process.env.TOKEN_KEY;
const localStorage = require("localStorage");

// Create Candidate Account.
router.post(
    '/signup',
    async (req, res) => {
        const { firstName, lastName, userName, email, password } = req.body;
        
        try{
            const candidateExists = await Candidate.findOne({userName, email});
            if(candidateExists){
                return res.status(409).json({error: "User already exists"});
            }

            const salt = await bcrypt.genSalt(10);
            const securePassword = await bcrypt.hash(password, salt);
            await Candidate.create({
                firstName,
                lastName,
                userName,
                email,
                password: securePassword
            });

            return res.status(200).json({success: true});
        } catch(error){
            return res.status(500).json({error});
        }
    }
);

// Log in if the candidate account exists.
router.post(
    '/login',
    async (req, res) => {
        const {email, password} = req.body;
        console.log('Candidate Login Attempt.')
        try{
            const candidateExists = await Candidate.findOne({email});
            if(!candidateExists){
                return res.status(404).json({error: "Account does not exists."});
            }

            const passwordMatch = await bcrypt.compare(password, candidateExists.password);
            if(!passwordMatch){
                return res.status(400).json({error: "Bad Request. Invalid Credentials."});
            }

            const maxAge = 24*60*60;
            const payload = { user: { id: candidateExists._id, candidate: true, admin: false } };
            const authToken = jwt.sign(payload, JWT_SECRET, {expiresIn: maxAge});

            res.cookie("authToken", authToken, {
                httpOnly: true,
            });
            
            const candidateData = {
                firstName: candidateExists.firstName,
                lastName: candidateExists.lastName,
                userName: candidateExists.userName,
                email: candidateExists.email,
                _id: candidateExists._id,
                authToken,
            };
            return res.status(200).json({candidateData});
            // res.writeHead(200, {
            //     'Set-Cookie': `Cookie1=${COOKIE}; HttpOnly`,
            //     "Access-Control-Allow-Credentials": "true"
            // }).send();
            // console.log('authToken saved in Cookie');
            // return res.status(200).json({authToken});
        } 
        catch(error){
            return res.status(500).json({error});
        }
    }
);

// Get information of a candidate using its id/username.
router.get(
    '/getuser',
    async (req, res)=>{
        const userId = localStorage.getItem('userId');
        const candidateId = localStorage.getItem('candidateId');
        console.log({userId, candidateId});
    }
)

// Logout candidate.
router.get(
    '/candidate-logout',
    verifyCandidateToken,
    (req, res) => {
        console.log('Entering API');
        localStorage.clear();
        res.clearCookie("authToken");
        console.log('Exiting API');
        return res.status(200).json({success: true});
    }
)

module.exports = router;