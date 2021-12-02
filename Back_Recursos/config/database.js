/* const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
    const mongoStringConnection = `mongodb://${host}:${port}/${db}`;

    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connnection error"))    

} */

const mongoose = require("mongoose");

const host = "localhost";
const port = "27017";
const db = "hr";

exports.mongoConnect = () => {
    //const mongoStringConnection = mongodb://${host}:${port}/${db}; 
    const mongoStringConnection = `mongodb+srv://parez:91SddBXZW96JlwXl@cluster0.mzxzf.mongodb.net/cosmeticacasera?retryWrites=true&w=majority`;
    mongoose.connect(mongoStringConnection);
    mongoose.Promise = global.Promise;
    const dbConnection = mongoose.connection;
    dbConnection.on("error", console.error.bind(console,"Mongodb connnection error"))}