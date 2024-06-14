const adminHotelBooking = require("../controllers/adminHotelCotroller")

module.exports = (app) =>{
    app.get('/bookings',adminHotelBooking.showHotelBooking);
}