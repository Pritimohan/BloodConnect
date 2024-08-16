
var { createPool } = require("mysql2/promise")
const env = require('dotenv').config();
function connectDb() {

    // Create a connection to the database
    const pool = createPool({
        host: process.env.HOST,
        user: process.env.USER_OF_DATABASE,
        password: process.env.PASSWORD_OF_DATABASE,
        database: process.env.DATABASE_NAME,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
    });
    console.log("Connected to database");
    return pool;
}

module.exports = { connectDb }