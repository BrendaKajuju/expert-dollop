const express = require ('express');
const bodyparser = require ('body-parser');
const mongoose = require ('mongoose');

const app = express();
const PORT = 8001;


// Add your database 
const db_url = 'mongodb://localhost:27017/ussd';
mongoose.connect(db_url);
const db = mongoose.connection;

// add your control flow


app.listen(PORT, () => {
    console.log ("App is running on the port" + PORT)
})
