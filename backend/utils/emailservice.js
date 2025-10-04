const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();

const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // Brevo SMTP host
  port: 465, // or 465 for SSL
  auth: {
    user: process.env.BREVO_USER, // usually your Brevo login (email or API key if enabled)
    pass: process.env.BREVO_PASS, // SMTP password
  },
});

const sendEmail = async (to, subject, text) => {
  await transporter.sendMail({
    from: process.env.BREVO_USER, // must be a verified sender in Brevo
    to,
    subject,
    text,
  });
};

module.exports = { sendEmail };
