const jwt = require('jsonwebtoken');
const localStorage = require("localStorage");
const config = process.env;

const verifyCandidateToken = (req, res, next) => {
    console.log('Entering middleware.');
    const token = req.header('authToken');

    if(!token) {
        console.log('Invalid token. Kindly login again.');
        // return res.redirect('/login');
        return res.status(403).send("A token is required for authentication.");
    }

    try{
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        if(!decoded.user.candidate || decoded.user.recruiter){
            console.log('Invalid session. please relogin.');
            localStorage.clear();
            res.clearCookie('authToken');
            // res.cookie("authToken", "", { maxAge: "1" });
            res.redirect('/login');
        }

        // console.log(decoded.user.id, localStorage.getItem('candidateId'));
        // if(localStorage.getItem('candidateId') !== decoded.user.id){
        //     console.log('Session Expired. please relogin.');
        //     localStorage.clear();
        //     return res.redirect('/login');
        // }
    } catch( err) {
        return res.status(401).json({msg: "Invalid token!", err: err});
    }
    console.log('Exiting middleware.');
    return next();
};

module.exports = verifyCandidateToken;