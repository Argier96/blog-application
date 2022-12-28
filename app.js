'use strict';

require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT;
const userRoute = require("./route/postRoute");
const commentRoute = require("./route/commentRoute");

const database = require("./database/db");
app.use(express.json());
app.use(cors());
database.database;

app.use('', userRoute);
app.use('', commentRoute);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })