const express = require('express');

let app = express();
let RouterModule = require('./routes');

app.use('/', RouterModule());

app.listen('4200', () => {
    console.log("Server is live...");
    
})
