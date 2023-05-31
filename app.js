
const express = require("express");
const ussdRoute = require("./index");
const bodyParser = require("body-parser");

const app = express();
const PORT = 8001;

app.listen(PORT, () => {
    console.log ("App is running on the port" + PORT)
})

app.get('/', (request, response) => {
    response.send('Success')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", ussdRoute);