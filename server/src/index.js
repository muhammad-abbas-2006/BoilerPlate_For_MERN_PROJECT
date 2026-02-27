import dotenv from "dotenv";
import connectionDB from "./DataBase/db.js";
import  app  from './app.js';

// Load environment variables synchronously
dotenv.config({ path: './.env' });

// Connect to DB first
connectionDB()
  .then(() => {
    // Start server after DB is connected
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });