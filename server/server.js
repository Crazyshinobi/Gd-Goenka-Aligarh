// Use Environment Variables
require("dotenv").config();

// Importing Libraries
const express = require("express");
const cors = require("cors");
const connectDb = require("./src/config/connectDb");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");

// Router
const adminRoutes = require("./src/routes/adminRoutes");
const contactRoutes = require("./src/routes/contactRoutes");
const galleryRoutes = require("./src/routes/galleryRoutes");
const contentRoutes = require("./src/routes/contentRoutes");
const admissionRoutes = require("./src/routes/admissionRoutes");
const jobRoutes = require("./src/routes/jobRoutes");
const jobApplicationRoutes = require("./src/routes/jobApplicationRoutes");
const admissionApplicationRoutes = require("./src/routes/admissionApplicationRoutes");
const admissionApplicationQueryRoutes = require("./src/routes/admissionApplicationQueryRoutes");
const userRoutes = require("./src/routes/userRoutes");
const paymentRoutes = require("./src/routes/paymentRoutes.js");

// Middleware
const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "Access-Control-Allow-Origin",
  ],
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/src/uploads", express.static(path.join(__dirname, "src/uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser());

// Database Connection
connectDb();

// API Routes
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/contact", contactRoutes);
app.use("/api/v1/gallery", galleryRoutes);
app.use("/api/v1/content", contentRoutes);
app.use("/api/v1/admission", admissionRoutes);
app.use("/api/v1/job", jobRoutes);
app.use("/api/v1/job-application", jobApplicationRoutes);
app.use("/api/v1/admission-application", admissionApplicationRoutes);
app.use("/api/v1/admission-application-query", admissionApplicationQueryRoutes);
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.get("/favicon.ico", (req, res) => res.status(204).end());

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server is running on port ${process.env.PORT || 8080}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname) + "/src/views/index.html");
});
