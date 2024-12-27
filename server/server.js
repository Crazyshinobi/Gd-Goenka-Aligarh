// Use Environment Variables
require("dotenv").config();

// Importing Libraries
const express = require("express");
const cors = require("cors");
const connectDb = require("./src/config/connectDb");
const app = express();
const path = require("path");

// Router
const adminRoutes = require("./src/routes/adminRoutes");
const contactRoutes = require("./src/routes/contactRoutes");
const galleryRoutes = require("./src/routes/galleryRoutes");
const contentRoutes = require("./src/routes/contentRoutes");
const admissionRoutes = require("./src/routes/admissionRoutes");
const jobRoutes = require("./src/routes/jobRoutes");
const jobApplicationRoutes = require("./src/routes/jobApplicationRoutes");

// Middleware
app.use(cors());
app.use(express.json());
app.use("/src/uploads", express.static(path.join(__dirname, "src/uploads")));
app.use(express.urlencoded({ extended: true }));

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

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
  app.get('/', (req,res)=>{
    res.json({message : "Hello"})
})
