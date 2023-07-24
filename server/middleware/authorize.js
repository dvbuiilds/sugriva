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
        if(!decoded.user.candidate || decoded.user.admin){
            console.log('Invalid session. please relogin.');
            localStorage.clear();
            res.clearCookie('authToken');
            res.redirect('/login');
            return res.status(500).json({error: 'Internal Server error.'});
        } else{
            return next();
        }
    } catch( err) {
        return res.status(401).json({msg: "Invalid token!", err: err});
    }
};

const verifyAdminToken = (req, res, next) => {
    const token = req.header('authToken');

    if(!token) {
        console.log('Invalid token. Kindly login again.');
        return res.status(403).send("A token is required for authentication.");
    }

    try{
        const decoded = jwt.verify(token, config.TOKEN_KEY);
        if(!decoded.user.admin || decoded.user.candidate){
            console.log('Invalid session. please relogin.');
            localStorage.clear();
            res.clearCookie('authToken');
            res.redirect('/admin');
            return res.status(500).json({error: 'Internal Server error.'});
        } else{
            return next();
        }
    } catch( err) {
        return res.status(401).json({msg: "Invalid token!", err: err});
    }
};

module.exports = {
    verifyCandidateToken,
    verifyAdminToken,
};