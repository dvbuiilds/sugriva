require('dotenv').config();

const connectToMongoDB = require('./config/database');
connectToMongoDB();

const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const port = process.env.BACK_PORT;
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', require('./routes/authorization'));
app.use('/api/candidateform', require('./routes/candidateForm'));

app.use('/api/admin', require('./routes/adminAuthorization'));

app.listen(port);