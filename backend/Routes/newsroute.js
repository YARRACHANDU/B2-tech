const express = require("express");
const router = express.Router();
const newsController = require("../controllers/newscontroller");
const authMiddleware = require("../middleware/authmiddleware");
const multer = require("multer");

// POST /flashnews (only accessible with valid token)
router.put("/flashnews", authMiddleware, newsController.updateFlashNews);

router.get("/flashnews", authMiddleware, newsController.getFlashNews);


const upload = multer({ dest: "uploads/" }); // Temporary storage before Cloudinary

// Add achievement
router.post(
  "/achievements",
  authMiddleware,
  upload.single("image"), // image file field
  newsController.addAchievement
);

// Update achievement
router.put(
  "/achievements/:id",
  authMiddleware,
  upload.single("image"),
  newsController.updateAchievement
);

// Delete achievement
router.delete(
  "/achievements/:id",
  authMiddleware,
  newsController.deleteAchievement
);

// GET all achievements
router.get(
  "/achievements",
  authMiddleware,
  newsController.getAchievements   // ← add this function in your controller
);
router.get("/flashnew", newsController.getFlashNew);

router.get("/achievement", newsController.getAllAchievements);
module.exports = router;
