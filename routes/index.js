var express = require('express');
var router = express.Router();

const { registerUserController, getDonorController } = require('../controllers/controllers.js')

const { connectDb } = require("../sqlDatabaseConnection.js")
const pool = connectDb()


/* GET home page. */
router.get('/', getDonorController); // get all donors

router.route("/register") // register page
  .get((req, res) => { // get request to register page 
    const error = req.flash("error")
    res.render("registerPage", { error });
  })
  .post(registerUserController); // post request to register page where user can register as a donor.




module.exports = router;
