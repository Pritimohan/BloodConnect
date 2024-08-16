const { connectDb } = require("../sqlDatabaseConnection.js")
const pool = connectDb()
async function getDonorController(req, res) {
    const { city, bloodgroup } = req.query;
    let result;
    if (city) {
        result = await pool.query(`SELECT*FROM donor WHERE city = '${city}'`)
    }
    if (bloodgroup) {
        result = await pool.query(`SELECT*FROM donor WHERE bloodgroup = '${bloodgroup}'`)
    }
    if (city && bloodgroup) {
        result = await pool.query(`SELECT*FROM donor WHERE bloodgroup = '${bloodgroup}' && city = '${city}'`)
    }
    let donor = result?.[0] || []; // if result is undefined, donor will be an empty array. 
    res.render('index', { donor });
}

module.exports = { getDonorController }