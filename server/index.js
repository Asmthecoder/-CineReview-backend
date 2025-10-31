import app from "./server.js";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import ReviewsDAO from "./reviews.DAO.js";

// Load environment variables
dotenv.config();

const port = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME || "cinereview";

if (!MONGODB_URI) {
    console.error("❌ MONGODB_URI is not defined in environment variables");
    process.exit(1);
}

MongoClient.connect(MONGODB_URI, {
    maxPoolSize: 50,
    wtimeoutMS: 2500
})
    .then(client => {
        console.log("✅ Connected to MongoDB Atlas!");
        console.log(`📍 Database: ${DB_NAME}`);
        
        const result = ReviewsDAO.injectDB(client);
        if (result !== undefined) {
            console.log("✅ ReviewsDAO initialized");
        } else {
            console.log("✅ ReviewsDAO connected");
        }
        
        app.listen(port, () => {
            console.log(`🚀 Server listening on port ${port}`);
            console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
        });
    })
    .catch(err => {
        console.error("❌ MongoDB connection failed:", err.message);
        console.error(err.stack);
        process.exit(1);
    });