const express  = require('express'); // Importing express module
const app = express(); //Express lai initialize garera app variable ma rakhne
const dotenv = require('dotenv')
dotenv.config(); //jati ni key value pair hunxa .env file ma yesko help bata memory ma load hunxa

require('./config/db'); //database connect garne code import gareko
const PORT = process.env.PORT || 3000; //process.env..... yo bata chai j ni key xa teslai access garna sakinxa

app.get('/', (req, res)=>{
    res.send('Hello World from Express');
});


app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});