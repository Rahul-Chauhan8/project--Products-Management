const express = require('express');

const route = require('./routes/routes.js');
const multer=require("multer")

const { default: mongoose } = require('mongoose');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().any())
mongoose.connect("mongodb+srv://RahulChauhan:3aDm5xdCx8MiuHql@cluster0.xzyyibs.mongodb.net/Products-Management", {
        useNewUrlParser: true
    })
    .then(() => console.log("MongoDb is connected")) // asynchronous behaviour
    .catch(err => console.log(err))

app.use('/', route)


app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});