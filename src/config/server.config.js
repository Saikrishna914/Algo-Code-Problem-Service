const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT : process.env.PORT,
    ATLAS_DB_URL:process.env.ATLAS_DB_URL,
    NODE_ENV:process.env.NODE_ENV  || "development",
    LOG_DB_URL : process.env.LOG_DB_URL
}