require('dotenv').config();
const express = require('express');
const mongoose = require ('mongoose');
const routes = require ('./routes/index');
const cors = require('cors');
const tableRoute = require('./routes/table')

const app = express();

app.use(express.json());
app.use(cors("*"));
app.use('/api',routes);
app.use('/api',tableRoute);

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology : true});

const database = mongoose.connection;

database.on ('error',(err)=> console.log(err));

database.on('connected',()=> console.log('Database connected'));

app.listen(3000, () => {
    console.log("Server started at localhost:3000")
});