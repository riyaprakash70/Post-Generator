const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const postRouter = require("./routes/postRouter");
const connectDB = require("./config/db");

dotenv.config(); // Load environment variables
connectDB();     // Connect to MongoDB

const app = express();

// Enable CORS for your frontend
app.use(cors({
  origin: "http://localhost:3000", // frontend URL
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json()); // Parse incoming JSON

// Mount the router at /api/post
app.use("/api/post", postRouter);

// Health check route
app.get("/", (req, res) => {
  res.send("CareerForge Backend is running");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
