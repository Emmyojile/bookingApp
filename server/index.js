// Import required modules and packages
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
dotenv.config();

// Set the port number to either the one provided in the environment or 8000 as default
const port = process.env.PORT || 8000;

// Import the database connection function
import connectDB from "./config/db.js";

// Create an Express app instance
const app = express();

const corsOptions = {
  origin: ["*", "http://localhost:5173","http://localhost:5174"], // Update this with the allowed origins or set it to a specific origin
  methods: "GET, POST, PUT, DELETE", // Update with the allowed HTTP methods
  allowedHeaders: "Content-Type, Authorization", // Update with the allowed headers
  credentials: true, // Enable credentials if you're using cookies or other authentication methods
};
app.use(cors(corsOptions));

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
