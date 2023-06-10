const mongoose = require("mongoose");
const MONGO_URI = "mongodb://localhost:27017/sugriva";

mongoose.set('strictQuery', true);

const connect = async () => {
    await mongoose
    .connect(MONGO_URI)
    .then(()=>{ console.log("DB Connected Successfully.")})
    .catch((error)=>{
        console.log("Connection falied.");
        process.exit(1);
    });
};

module.exports = connect;