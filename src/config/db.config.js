const mongoose = require('mongoose');
const { NODE_ENV, ATLAS_DB_URL } = require('./server.config');


async function ConnectToDb(){

    try {
        if(NODE_ENV=="development"){
            await mongoose.connect(ATLAS_DB_URL);
        }
    } catch (error) {
        console.log("Connection to DB failed");
        console.log(error);
    }

}

module.exports = ConnectToDb;