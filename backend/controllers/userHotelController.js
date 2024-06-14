const user_Hotel = require("../models/userDetailHotel")

exports.hotelbook = async (req,res) =>{
        // Extract data from the request body
        const user_Hotel_obj = {
            name : req.body.name,
            mobile : req.body.mobile,
            email : req.body.email,
            guests : req.body.guests,
            checkin : req.body.checkin,
            checkout : req.body.checkout,
            totalPrice : req.body.totalPrice,
            roomHeading : req.body.roomHeading
          }

          console.log(user_Hotel_obj);

  // Create a new booking object

  try {
    const user_Hotel_Created = await user_Hotel.create(user_Hotel_obj);
    res.status(201).send(user_Hotel_Created)
  } catch (error) {
    console.log("error while registering user "+ error);
        res.status(500).send({
            message : "some error occured while booking hotel"
        })
  }
  

}