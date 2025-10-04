const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./Routes/authroute");
const newrouter = require("./Routes/newsroute");
require("dotenv").config();

const app = express();

// Connect to MongoDB
connectDB();

app.use(cors());
app.use(express.json());

// Public routes
app.use("/api/auth", authRoutes);
app.use("/news", newrouter);
const contactRoutes = require("./Routes/contactRoutes");
app.use("/api/contact", contactRoutes);

// Protected route

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
