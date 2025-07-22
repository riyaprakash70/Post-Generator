const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

router.post("/generate", async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "Content is required." });
  }

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant that writes social media posts.",
          },
          {
            role: "user",
            content: `Generate a professional post for: ${content}`,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
          "HTTP-Referer": "https://yourdomain.com", 
          "X-Title": "CareerForge Post Generator",
        },
      }
    );

    const aiPost = response.data.choices[0].message.content;
    res.json({ post: aiPost });
  } catch (error) {
    console.error("AI error:", error?.response?.data || error.message);
    res.status(500).json({ error: "Failed to generate post." });
  }
});

module.exports = router;
