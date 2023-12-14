const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

const router = require('./router');

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors({
    allowedHeaders: '*',
    origin: ["http://localhost:3000", "http://localhost:8080", "*"],
    // methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
    credentials: true,
    // 'Access-Control-Allow-Origin': '*',
}));

app.use(morgan('tiny'));

app.use(router);

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('starting on port 8080');
    app.listen(8080);
})