var express = require('express');
var app = express();

//require body-parser for this method
var bodyParser = require ('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.get('/', function (req, res){
    res.sendFile(__dirname+ "/" + "index.html" );
})

app.post('/process_post', urlencodedParser, function (req, res) {

// Prepare output in JSON format
response = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    gender: req.body.gender,
    birthday: req.body.birthday,
    address: req.body.address
};
console.log(response) ;
res.end (JSON.stringify(response) );
});

app.listen(3000, () => {
    console.log('Server is running on http : //localhost : 3000');
 });
