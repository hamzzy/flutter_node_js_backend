const express = require('express');
const userRouter = require('./routers/user');
const bodyParser=require('body-parser');
const logger=require('morgan');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT
require('././db/db.js')

const app = express()

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})