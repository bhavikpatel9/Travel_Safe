const user_Hotel = require("../models/userDetailHotel")

exports.showHotelBooking = async (req,res)=>{
        try {
            const bookings = await user_Hotel.find({});
            res.status(200).json(bookings);
        } catch (error) {
            console.error('Error fetching bookings:', error);
            res.status(500).json({ message: 'Internal server error' });
        }
}