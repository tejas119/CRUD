const express = require("express");
var router = express.Router();
// const mongoose = require("mongoose");
// const Employee = mongoose.model('Employee');
// sunil change to
var Employee = require('../models/employee.model.js');

router.get('/', (req, res) => {
    res.render("employee/addOrEdit", {
        viewTitle: "Insert Employee"
    });
});

router.post('/', (req, res) => {
    insertRecord(req, res);
});


function insertRecord(req, res) {
    var employee = new Employee({
   fullName : req.body.fullName,
   email : req.body.email,
   mobile : req.body.mobile,
   city : req.body.city
    });
   employee.save((err, doc) => {
        if (!err) {
            res.redirect('employee/list');
        }
        else {
            console.log('Error during record insertion: ' + err);
        }
    });
}

router.get('/list', (req, res) => {
    res.json('from list')
});
// export this router object from this controller
module.exports = router;