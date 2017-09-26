var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/HeartRate',function(req, res, next) {
    res.render('HeartRate', { title: 'Heart Rate' });
});

router.get('/Weight',function(req, res, next) {
    res.render('Weight', { title: 'Weight' });
});

router.get('/BloodPressure',function(req, res, next) {
    res.render('BloodPressure', { title: 'Blood Pressure' });
});


router.get('/Reminders',function(req, res, next) {
    var rems = [
        {
            id: 1 ,
            text: "Please take your blood pressure",
            validated: false
        },
        {
            id: 2,
            text: "Don't forget to take your pills.",
            validated: true
        },
        {
            id: 3,
            text: "You have an appointment with the doctor.",
            validated: false
        }

    ];

    res.render('Reminders', { title: 'Reminders', reminders:rems});
});

module.exports = router;
