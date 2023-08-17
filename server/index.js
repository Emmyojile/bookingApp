// Import required modules and packages
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();

// Set the port number to either the one provided in the environment or 8000 as default
const port = process.env.PORT || 8000;

// Import the database connection function
import connectDB from "./config/db.js";

// Create an Express app instance
const app = express();

// Parse incoming JSON and url-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Parse cookies from the request
app.use(cookieParser());

import apiRoutes from "./routes/index.js";
app.use("/api", apiRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const start = async () => {
  try {
    // Connect to the database
    await connectDB();
    
    // Start the server and listen on the specified port
    app.listen(port, () => console.log(`Server is listening on ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
