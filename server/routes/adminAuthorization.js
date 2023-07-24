require('dotenv').config();
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require('../model/Admin');
const { verifyAdminToken } = require('../middleware/authorize');
const ProfileOne = require('../model/ProfileOne');
const JWT_SECRET = process.env.TOKEN_KEY;

router.post(
    '/login',
    async (req, res)=>{
        const {email, password} = req.body;
        console.log('Admin Login Attempt.')
        try{
            const adminExists = await Admin.findOne({email});
            if(!adminExists){
                return res.status(404).json({error: "Account does not exists."});
            }

            const passwordMatch = await bcrypt.compare(password, adminExists.password);
            if(!passwordMatch){
                return res.status(400).json({error: "Bad Request. Invalid Credentials."});
            }

            const maxAge = 24*60*60;
            const payload = { user: { id: adminExists._id, candidate: false, admin: true } };
            const authToken = jwt.sign(payload, JWT_SECRET, {expiresIn: maxAge});

            res.cookie("authToken", authToken, {
                httpOnly: true,
            });
            
            const adminData = {
                firstName: adminExists.firstName,
                lastName: adminExists.lastName,
                userName: adminExists.userName,
                email: adminExists.email,
                _id: adminExists._id,
                authToken,
            };
            return res.status(200).json({adminData});
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

router.post(
    '/create',
    async (req, res)=>{
        const { firstName, lastName, userName, email, password } = req.body;
        
        try{
            const adminExists = await Admin.findOne({userName, email});
            if(adminExists){
                return res.status(409).json({error: "User already exists"});
            }

            const salt = await bcrypt.genSalt(10);
            const securePassword = await bcrypt.hash(password, salt);
            await Admin.create({
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

router.get(
    '/all-profiles',
    verifyAdminToken,
    async (req, res)=>{
        try {
            const allProfiles = await ProfileOne.find({});
            console.log({allProfiles});
            return res.status(200).json({
                'message': 'succuess',
                allProfiles
            });
        } catch (error) {
            console.log('error.message', error.message);
        }
        return res.status(300).json({'message': 'failed'});

    }
);

module.exports = router;