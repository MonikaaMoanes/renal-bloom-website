const mongoose = require("mongoose");
const { MONGO_URI } = require("./dotenv");

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    console.log("✅ MongoDB connected");

    // 🔥 SHOW EXACT DATABASE NAME
    console.log("🔥 Connected to DB:", mongoose.connection.name);

  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

