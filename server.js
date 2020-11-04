require('./models/db');

const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');

// request statement for employee controller
const employeeController = require('./controllers/employeeController');

var app = express();
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
app.set('views',path.join(__dirname,'/views/'))
app.engine('hbs', exphbs({ extname:'hbs', defaultLayout:'mainLayout', layoutsDir:__dirname + '/views/layouts'}));
app.set('view engine', 'hbs');

app.listen(5000 , () => {
    console.log('Express server started at port: 5000');
});

// add route for employee controller
// we will call middle wave function
app.use('/employee',employeeController);