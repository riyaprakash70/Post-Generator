const express = require("express");
const router = express.Router();
const { generatePost } = require("../controllers/postController");

// This handles POST requests to /api/post/generate
router.post("/generate", generatePost);

module.exports = router;
