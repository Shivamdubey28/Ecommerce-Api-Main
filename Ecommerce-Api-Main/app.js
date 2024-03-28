require('dotenv').config()
const express = require("express");
const connectDB = require("./db/connection");
const app = express();
const port = 3000 || process.env.PORT;
const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const productRouter = require("./routes/product");



app.use(express.json());

app.use("/", authRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);



const run = async (req, res) => {
  try {
    await connectDB();
    app.listen(port, () => {
      console.log(`Server is running at ${port}`);
    });
  } catch (err) {
    console.log(err.message);
  }
};
run();
