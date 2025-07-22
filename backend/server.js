const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const postRouter = require("./postRouter"); 

dotenv.config();
const app = express();

app.use(cors({ origin: "http://localhost:3000", methods: ["GET", "POST"], credentials: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend is working!");
});

app.use("/api/post", postRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
