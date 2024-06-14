const carBookController = require("../controllers/userCarController")

module.exports = (app) =>{
    app.post('/submit_car_booking',carBookController.carbook);
}