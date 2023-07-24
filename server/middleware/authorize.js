const jwt = require('jsonwebtoken');
const localStorage = require("localStorage");
const config = process.env;

const verifyCandidateToken = (req, res, next) => {
    const token = req.header('authToken');

    if(!token) {
        console.log('Invalid token. Kindly login again.');
        return res.status(403).send("A token is required for authentication.");
    }

    try{
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        if(!decoded.user.candidate || decoded.user.recruiter){
            console.log('Invalid session. please relogin.');
            localStorage.clear();
            res.clearCookie('authToken');
            res.redirect('/login');
        }
    } catch( err) {
        return res.status(401).json({msg: "Invalid token!", err: err});
    }
    return next();
};

module.exports = verifyCandidateToken;