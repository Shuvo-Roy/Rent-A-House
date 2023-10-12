const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking.js');
const jwt = require('jsonwebtoken');
const jwtSecret = 'mynameshuvoroymyname';


function getUserDataFromToken(req) {
    return new Promise((resolve, rejects) => {
      jwt.verify(req.cookies.token, jwtSecret, {}, async (err, userData) => {
        if (err) throw err;
        resolve(userData);
      });
    });
  }

// Create a new booking logic
router.post('/bookings', async (req, res) => {
    const userData = await getUserDataFromToken(req)
  const {
    place,
    checkIn,
    checkOut,
    numGuests,
    name,
    mobile,
    price,
} = req.body

Booking.create({
  place,
  checkIn,
  checkOut,
  numGuests,
  name,
  mobile,
  price,
  user:userData.id,
}).then((data,err)=>{
  if(err) throw err
  res.json(data)
})
});


// Get user bookings logic
router.get('/bookings', async (req, res) => {
  
  const userData= await getUserDataFromToken(req)
  res.json(await Booking.find({
    user:userData.id
  }).populate('place'))
});

module.exports = router;
