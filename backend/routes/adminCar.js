const adminCarBooking = require("../controllers/adminCarController")

module.exports = (app) =>{
    app.get('/car_bookings',adminCarBooking.showCarBooking);
}