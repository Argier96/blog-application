require("dotenv").config();

const mongoose = require('mongoose');
console.log(process.env.MONGO_DB_URL);
const database =  mongoose.connect(process.env.MONGO_DB_URL).then(() => {
        console.log("db connected.");
    }).catch((err)=>{
        console.log(err);
    });


module.exports = {
    database,
}