const hotelBookController = require("../controllers/userHotelController")

module.exports = (app) =>{
    app.post('/submit_hotel_booking',hotelBookController.hotelbook);
}