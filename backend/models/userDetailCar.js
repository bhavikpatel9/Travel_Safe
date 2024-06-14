const mongoose = require("mongoose")
// Define a schema for bookings
const CarBookingSchema = new mongoose.Schema({
    name: String,
    car: String,
    mobile: String,
    email: String,
    pickup: Date,
    dropoff: Date,
    totalPrice: Number
  });
  
  // Create a model based on the schema

  module.exports = mongoose.model("userCar",CarBookingSchema)