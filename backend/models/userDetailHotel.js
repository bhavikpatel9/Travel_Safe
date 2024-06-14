const mongoose = require("mongoose")
// Define a schema for bookings
const HotelBookingSchema = new mongoose.Schema({
    name: String,
    mobile: String,
    email: String,
    guests: Number,
    checkin: Date,
    checkout: Date,
    totalPrice: Number,
    roomHeading: String
  });
  
  // Create a model based on the schema

  module.exports = mongoose.model("userHotel",HotelBookingSchema)