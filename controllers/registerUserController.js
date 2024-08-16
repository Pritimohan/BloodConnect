const { connectDb } = require("../sqlDatabaseConnection.js")
const pool = connectDb()
async function registerUserController(req, res) {
    const { firstname, lastname, city, bloodgroup, phonenumber } = req.body;
    try {
        if (!firstname || !lastname || !city || !bloodgroup || !phonenumber) { //check if all fields are filled
            req.flash("error", "❌ Please fill all the fields");
            res.redirect("/register");
            console.log("fill all the fields");
        }
        if (phonenumber.length !== 10) {//check if phone number is of 10 digits
            req.flash("error", "❌ Phone number should be of 10 digits");
            res.redirect("/register");
            console.log("wrong phone number");
        }
        const isUnique = await pool.query(`SELECT * FROM donor WHERE phonenumber='${phonenumber}'`);
        if (isUnique[0].length > 0) { //check if phone number already exists
            req.flash("error", "❌ Phone number already exists");
            res.redirect("/register");
            console.log("Phone number already exists");
        }
        const fullname = `${firstname} ${lastname}`

        await pool.query(`INSERT INTO donor(name, city, bloodgroup, phonenumber) VALUES ('${fullname.toUpperCase()}', '${city.toUpperCase()}', '${bloodgroup.toUpperCase()}', '${phonenumber}')`);

        res.redirect("/");

    } catch (error) {
        console.log("error in registerUserController", error.message);
    }
}

module.exports = { registerUserController }