const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { sendEmail } = require('../utils/emailservice');

exports.sendOtp = async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email required" });

  const otp = crypto.randomInt(100000, 999999).toString();
  const otpExpires = new Date(Date.now() + 5 * 60 * 1000); // 5 minutes expiry

  try {
    await User.findOneAndUpdate(
      { email },
      { otp, otpExpires },
      { upsert: true, new: true }
    );

    await sendEmail(email, "OTP for your login", `Your OTP is ${otp}`);

    res.json({ message: "OTP sent"});
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Error sending OTP" });
  }
};

// Verify OTP (only OTP from client)
exports.verifyOtp = async (req, res) => {
  const { otp } = req.body;
  if (!otp) return res.status(400).json({ message: "OTP required" });

  try {
    const user = await User.findOne({ otp });
    if (!user) return res.status(400).json({ message: "Invalid OTP" });

    if (user.otpExpires < new Date()) {
      return res.status(400).json({ message: "OTP expired" });
    }

    // ✅ Clear OTP after success
    user.otp = null;
    user.otpExpires = null;
    await user.save();

    // ✅ Sign JWT with user ID and email
    const token = jwt.sign(
      { id: user._id, email: user.email },
       process.env.sec,  // fallback
      { expiresIn: "1h" }
    );

    res.json({
      success: true,
      message: "OTP verified successfully",
      token,
    });

  } catch (error) {
    res.status(500).json({ message: "Error verifying OTP", error: error.message });
  }
};