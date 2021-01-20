const express = require('express');
const app = express();

const STHlog = [];

app.post('/create', (req, res) => {
    console.log(req.body)
    res.send('The log is created');
});

app.get('/receive',(req,res) => {
    res.send("THE sthlog array")
})

app.listen(5050, () => console.log('Server listening on port 5050!'));