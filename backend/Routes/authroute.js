const express = require("express");
const router = express.Router();


const {
  sendOtp,
  verifyOtp,
} = require("../controllers/usercontroller");


const auth = require("../middleware/authmiddleware");
router.post("/sendotp", sendOtp);
router.post("/verifyotp", verifyOtp);

// --------------------
// Publication routes
// --------------------


module.exports = router;
