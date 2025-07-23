const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const postRouter = require("./routes/postRouter");

dotenv.config(); // load .env file

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

app.use("/api/post", postRouter);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send(" CareerForge Backend is running");
});

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
