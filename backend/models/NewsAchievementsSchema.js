const mongoose = require("mongoose");

const AchievementSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String, // URL or path to image
    default: ""
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const NewsAchievementsSchema = new mongoose.Schema({
  flashnews: {
    type: String,
    required: true,
    trim: true
  },
  achievements: {
    type: [AchievementSchema], // array of achievements
    default: []
  },
  email: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model("NewsAchievements", NewsAchievementsSchema);
