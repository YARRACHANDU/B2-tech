// utils/cloudinary.js
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.cloudname,
  api_key: process.env.cloudkey,
  api_secret: process.env.cloudsecret,
});

module.exports = cloudinary;
