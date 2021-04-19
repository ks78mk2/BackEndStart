const md5 = require('md5');
const express = require('express');

const app = express();
const port = 80;

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

const getMD5Digest = (input) => {
    return md5(input)
}

app.listen(port, () => {
    console.log("run")
})
