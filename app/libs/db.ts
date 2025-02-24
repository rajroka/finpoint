import mongoose from "mongoose";
<<<<<<< HEAD

const connectToDatabase = async (): Promise<void> => {
  try {
    const uri = process.env.MONGODB_URI ?? "";
    if (!uri) {
      throw new Error(
        "MONGODB_URI is not defined in the environment variables."
      );
    }
    await mongoose.connect(uri);
    console.log("MongoDB is connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

export default connectToDatabase;
=======
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Get MongoDB connection URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("⚠️ MONGODB_URI is missing in environment variables.");
}

/**
 * Connects to the MongoDB database.
 * @throws {Error} If the connection fails.
 */
const connectToDatabase = async (): Promise<void> => {
  try {
    // ✅ Prevent multiple connections
    if (mongoose.connection.readyState >= 1) {
      console.log("✅ Using existing MongoDB connection.");
      return;
    }

    console.log("⏳ Connecting to MongoDB...");

    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI, {
      dbName: process.env.MONGODB_DB_NAME || "your-database-name", // Use environment variable or fallback
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);

    console.log("✅ MongoDB connected successfully.");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB:", error);
    throw new Error("Database connection failed.");
  }
};

export default connectToDatabase;
>>>>>>> 4c4f13f (here)
