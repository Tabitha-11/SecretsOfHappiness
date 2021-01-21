const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.use(cors());
app.use(bodyParser.json());

//STH -- SecretsToHappiwess
const STHlog = [];

app.post('/create', (req, res) => {
    req.body.date = new Date();
    STHlog.push(req.body)
    res.send('The log is created');
});


app.get('/receive',(req,res) => {
    res.send({Data: STHlog})
})

app.listen(5050, () => console.log('Server listening on port 5050!'));