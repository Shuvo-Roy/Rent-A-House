const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const multer = require('multer');
const fs = require('fs');
const photosMiddleware = multer({ dest: 'uploads/' });


const app = express();
app.use(express.json());
// Middleware and configurations...
app.use(cookieParser())


mongoose.connect(process.env.MONGODB_URL)


app.use(cors({
    credentials:true,
    origin:'http://127.0.0.1:5173',
}))

mongoose.connect(process.env.MONGODB_URL)



// Import route files
const userRoutes = require('./routes/userRoutes');
const placeRoutes = require('./routes/placeRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

// Use route files
app.use('/user', userRoutes);
app.use('/place', placeRoutes);
app.use('/booking', bookingRoutes);







app.use('/uploads', express.static('uploads'));
app.post('/upload', photosMiddleware.array('photos', 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newName = 'photo' + Date.now() + '.' + ext;
    const newPath = __dirname + '/uploads/' + newName;
    try {
      fs.renameSync(path, newPath);
      uploadedFiles.push(`http://localhost:${port}/uploads/${newName}`);
    } catch (error) {
      console.error('Error moving uploaded file:', error);
    }
  }
  res.json(uploadedFiles);
});









// Your app.listen() and other configurations...
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
