const mongoose = require('mongoose');

// DB connection
mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/EmployeeDB', 
    {useNewUrlParser: true,
    useUnifiedTopology: true
}).then( () => {
    console.log("DB Connected");
});


// connecting mongodb to nodejs
require('./employee.model');
