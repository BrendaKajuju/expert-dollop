const express = require ('express');
const bodyparser = require ('body-parser');
const mongoose = require ('mongoose');

const app = express();
const PORT = 8001;


// Initialize your database 
const db_url = 'mongodb://localhost:27017/ussd';
mongoose.connect(db_url);
const db = mongoose.connection;
db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log ("database is up and running")
})

// add your control flow with body parser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}))

// add methods
app.get()



app.listen(PORT, () => {
    console.log ("App is running on the port" + PORT)
})
