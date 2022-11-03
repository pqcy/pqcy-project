const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

/*
app.get('/', (req, res) => {
    res.send('Hello World!\n')
})
*/

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/', require('./routes/home'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
