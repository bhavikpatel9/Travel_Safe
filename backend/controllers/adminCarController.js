const user_Car = require("../models/userDetailCar")

exports.showCarBooking = async (req,res)=>{
        try {
            const bookings = await user_Car.find({});
            res.status(200).json(bookings);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
}