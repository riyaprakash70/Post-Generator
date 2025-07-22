const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const postRouter = require("./postRouter");

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

//  Basic route
app.get("/", (req, res) => {
  res.send("Backend is working!");
});

//  API route for post generation
app.use("/api/post", postRouter);

//  Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
