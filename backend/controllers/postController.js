const axios = require("axios");

const generatePost = async (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ error: "❌ Content is required." });
  }

  console.log("📩 Received content:", content);
  console.log("🔐 Using API Key:", process.env.OPENROUTER_API_KEY ? "Present" : "Missing");

  try {
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: content },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ OpenRouter response received.");
    return res.status(200).json({ post: response.data.choices[0].message.content });
  } catch (error) {
    console.error("❌ Error while generating post:", error?.response?.data || error.message);
    return res.status(500).json({ error: "Failed to generate post. Check logs for details." });
  }
};

module.exports = { generatePost };
