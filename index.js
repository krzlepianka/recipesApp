require('dotenv').config({path: './.env'});
const express = require('express');
      app = express();
      cors= require('cors');
      bodyParser =require('body-parser');
      mongoose = require('mongoose');
      api = require('./api/index');

const { PORT, DB_CONNECTION_STRING} = process.env;

mongoose.connect(DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
    console.log(`you are connected to database ${DB_CONNECTION_STRING}`);
})

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("/api", api);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
});