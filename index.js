const express = require('express')
const routes = require('./routes/api')
const mongoose = require('mongoose')
const cors = require('cors');
require('dotenv').config()

const app = express()


//! Mongoose Connection
const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .catch(err => console.error(`ERROR: ${err}`));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});

app.use(cors());
app.use(express.json())
app.use('/api', routes)

//! Server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Back-End server is listening on port: ${port}`)
})
