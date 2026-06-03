const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();
app.use(express.json());
app.use("/api/expenses" , expenseRoutes);
const PORT = 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/" , (req , res) => {
    res.send("Expense Tracker Backend Running");
});

app.listen(PORT ,() => {
    console.log(`Server running on port ${PORT}`);
});