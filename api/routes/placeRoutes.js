const express = require('express');
const router = express.Router();
const Place = require('../models/Places.js');
const jwt = require('jsonwebtoken');
const jwtSecret = 'mynameshuvoroymyname';



// create a new place
router.post('/places', async (req, res) => {
    const {token} = req.cookies
    const {
      title,
      address,
      addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
    }= req.body
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) throw err
      const placeDoc = await Place.create({
        owner:userData.id,
        title,
      address,
      photos:addedPhotos,
      description,
      perks,
      extraInfo,
      checkIn,
      checkOut,
      maxGuests,
      price,
      })
      res.json(placeDoc)
    })
});

// Get places by user id logic
router.get('/user-places', async (req, res) => {
    const {token} = req.cookies
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      const {id} = userData
      res.json(await Place.find({owner:id}))
  
    })
});


  // Find place by id logic
router.get('/places/:id', async (req, res) => {
    const {id} =req.params
    res.json(await Place.findById(id))
});


// Update place information logic
router.put('/places', async (req, res) => {
    const {token} = req.cookies
  const {
    id,
    title,
    address,
    addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
  }= req.body
  
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err
    const placeDoc = await Place.findById(id)
   if(userData.id === placeDoc.owner.toString()){
    placeDoc.set({
    title,
    address,
    photos:addedPhotos,
    description,
    perks,
    extraInfo,
    checkIn,
    checkOut,
    maxGuests,
    price,
    })
    await placeDoc.save()
    res.json('ok')
   }
  })
});

 // Get all places logic
router.get('/places', async (req, res) => {
    res.json(await Place.find())
});





module.exports = router;