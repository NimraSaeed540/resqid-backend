const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/medical", require("./routes/medicalRoutes"));
app.use("/api/profile", require("./routes/profile"));
app.use("api/detailedinformation", require("./routes/detailedinformation"));
app.use("/uploads", express.static("uploads"));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 5001;
    app.get("/", (req, res) => {
  res.send("ResQID Backend is Running 🚀");
});

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));