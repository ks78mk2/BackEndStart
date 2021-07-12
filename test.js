const md5 = require('md5');
const express = require('express');
const fs = require('fs');
const app = express();
const port = 8080;

app.use('/', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    fs.readFile('./public/test.html', function (error, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    })
})
app.get('/hash/:input', function (req, res) {
    let input = req.params.input;
    let data = '';
    for (let i = 0; i < 100000; i++) {
        data = getMD5Digest(input);
        if (i == 0) {
            console.log(data);
        }
    }
    res.status(200).send(data);
})

app.get('/hello', function (req, res) {

    res.status(200).send('hello2')

})

const getMD5Digest = (input) => {
    return md5(input)
}

app.listen(port, () => {
    console.log("run")
})
