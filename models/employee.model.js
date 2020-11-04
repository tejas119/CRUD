const mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new Schema({
    fullName:{
        type:String
    },
    email:{
        type:String
    },
    mobile:{
        type:String
    },
    city:{
        type:String
    } 
});


// register employeeSchema in mongoose

// mongoose.model('Employee',  employeeSchema);
//     // name of the schema   object of the schema 

// sunil change this to
module.exports= mongoose.model('Employee', employeeSchema);