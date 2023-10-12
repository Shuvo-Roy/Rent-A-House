const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const jwtSecret = 'mynameshuvoroymyname';

// Register a new user
router.post('/register', async (req, res) => {
  console.log('Received a POST request to /register')
    const {name,email,password} = req.body
    try {
        const userDoc = await User.create({
            name,
            email,
            password:bcrypt.hashSync(password,bcryptSalt),
        })
        res.json(userDoc)
    } catch (error) {
        res.status(422).json(error)
    }

});

// Login user
router.post('/login', async (req, res) => {
    const {email,password} = req.body
    const userDoc = await User.findOne({email})
    if (userDoc) {
      const passOk = bcrypt.compareSync(password, userDoc.password)
      if (passOk) {
        jwt.sign({
          email:userDoc.email,
          id:userDoc._id
        }, jwtSecret, {}, (err,token) => {
          if (err) throw err
          res.cookie('token', token).json(userDoc)
        })
      } else {
        res.status(422).json('pass not ok')
      }
    } else {
      res.json('not found')
    }
});

// Get user profile
router.get('/profile', async (req, res) => {
  const {token} = req.cookies
  if (token) {
    jwt.verify(token, jwtSecret, {}, async (err, userData) => {
      if (err) {
        console.error('JWT verification error:', err);
        return res.status(500).json({ error: 'JWT verification failed' });
      }
      try {
        const {name, email, _id} = await User.findById(userData.id)
        res.json({name, email, _id})
      } catch (dbError) {
        console.error('Database query error:', dbError);
        res.status(500).json({ error: 'Database query failed' });
      }
    });
  } else {
    res.json(null)
  }
});


// Logout user
router.post('/logout', (req, res) => {
    res.cookie('token', '').json(true)
});

module.exports = router;