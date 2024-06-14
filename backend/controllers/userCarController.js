const user_Car = require("../models/userDetailCar")

exports.carbook = async (req,res) =>{
        // Extract data from the request body
        const user_Car_obj = {
            name : req.body.name,
            car : req.body.car,
            mobile : req.body.mobile,
            email : req.body.email,
            pickup : req.body.pickup,
            dropoff : req.body.dropoff,
            totalPrice : req.body.totalPrice
          }

          console.log(user_Car_obj);

  // Create a new booking object

  try {
    const user_Car_Created = await user_Car.create(user_Car_obj);
    res.status(201).send(user_Car_Created)
  } catch (error) {
    console.log("error while registering user "+ error);
        res.status(500).send({
            message : "some error occured while booking car"
        })
  }
  

}