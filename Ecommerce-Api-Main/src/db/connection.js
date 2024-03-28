const mongoose = require("mongoose");

const connectDB = () => {
  return mongoose.connect(
  "mongodb://dubeyshivam512:shivamshivam@ac-6xfhjfg-shard-00-00.bsjppuh.mongodb.net:27017,ac-6xfhjfg-shard-00-02.bsjppuh.mongodb.net:27017/?ssl=true&replicaSet=atlas-qc34uv-shard-0&authSource=admin&retryWrites=true&w=majority",//process.env.MONGO_URL,
    //process.env.MONGODB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};
module.exports = connectDB;
