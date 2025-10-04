const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

let otps = {}; // store { email: otp }

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// 📩 Send OTP
router.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res.status(400).json({ success: false, message: "Email required" });

  const otp = Math.floor(100000 + Math.random() * 900000); // 6-digit OTP
  otps[email] = otp;

  try {
    await transporter.sendMail({
      from: `"B2 Tech Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your OTP Verification Code",
      html: `<h2 style="color:#0a1f44;">Your OTP is: <b>${otp}</b></h2>
             <p>Please use this code to verify your email.</p>`,
    });

    res.json({ success: true, message: "OTP sent to email" });
  } catch (error) {
    console.error("❌ OTP send failed:", error);
    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
});

// ✅ Verify OTP
router.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (otps[email] && otps[email].toString() === otp.toString()) {
    delete otps[email]; // clear OTP after success
    res.json({ success: true, message: "OTP verified" });
  } else {
    res.status(400).json({ success: false, message: "Invalid OTP" });
  }
});

// 📥 Final Contact Form Submission
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message)
    return res
      .status(400)
      .json({ success: false, message: "All fields required" });

  try {
    // Send to Founder
    await transporter.sendMail({
      from: `"B2 Tech Services" <${process.env.EMAIL_USER}>`,
      to: process.env.FOUNDER_EMAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b> ${message}</p>`,
    });

    // Auto-Reply
    await transporter.sendMail({
      from: `"B2 Tech Services" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your message",
      html: `<h2 style="color:#0a1f44;">Hi ${name},</h2>
             <p>We got your message:</p>
             <blockquote style="border-left:4px solid #00809D;padding-left:10px;">${message}</blockquote>
             <p>We’ll reply soon. Thanks for reaching out!</p>`,
    });

    res.json({ success: true, message: "Form submitted successfully" });
  } catch (error) {
    console.error("❌ Form submission failed:", error);
    res.status(500).json({ success: false, message: "Failed to send message" });
  }
});

module.exports = router;
