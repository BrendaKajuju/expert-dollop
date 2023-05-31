const express = require ('express');
const bodyParser = require ('body-parser');
const mongoose = require ('mongoose');
const config = require('config');
const Africastalking = require('africastalking');


const AT = Africastalking(config.get('AT')).USSD;
console.log(AT);
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
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// add methods
app.get('/', (request, response) => {
    response.send('Success')
})

app.post('/', (request, response) => {;
    const {sessionId, phoneNumber, text} = request.body;
    let reply;

    if (text === '')
    {
        reply = 'CON Hello, what services do you want? '
    }


    setTimeout( () => {
        response.send(reply);
        response.end()
    }, 2000)
})


app.listen(PORT, () => {
    console.log ("App is running on the port" + PORT)
})
