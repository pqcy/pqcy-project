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
//app.use('/process', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/public'));
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride('_method'));

app.use('/', require('./routes/home'));
app.use((req, res, next) => {
    res.status(404).send('[error] 404 Not Found');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
