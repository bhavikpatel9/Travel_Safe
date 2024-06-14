const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

// Enable CORS with specific settings
// const corsOptions = {
//     origin: 'http://127.0.0.1:5501', // Replace with your frontend URL
//     methods: ['GET', 'POST'], // Allowed methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Allowed headers
// };

app.use(cors());


app.use(express.json())

// Connect to MongoDB
mongoose.connect("mongodb+srv://patelbj229:9UieoLzz4gvkQlNN@cluster0.vxf15n6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

const db = mongoose.connection

db.on("error",()=>{
    console.log("error while connecting to database");
})

db.once("open",()=>{
    console.log("successfully connected to database");
})

// Handle POST request to submit booking
require("./routes/userHotelRoutes")(app)
require("./routes/userCarRoutes")(app)
require("./routes/adminHotel")(app)
require("./routes/adminCar")(app)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
