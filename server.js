const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

app.get('/', (req, res) => {
  res.send('Báwoni Éyin áráye!');
});

const startServer = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('Motí wole oO 😆');
    app.listen(process.env.PORT, () => {
        console.log(`Example app listening on port ${process.env.PORT}`);
    });

  } catch (err) {
    console.error('Error connecting to the database', err);
  }
};

startServer().catch(err => console.log(err));
