var express = require('express');
var router = express.Router();
var http = require('http');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/HeartRate',function(req, res, next) {
    var options = {
        host: '141.85.241.224',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=pulse&order_by=-timestamp&user=2'
    };
    var req = http.get(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var hrData = reqBody.measurements;
            console.log(hrData);
            res.render('HeartRate', { title: 'Heart Rate', plotData:hrData});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });


});

router.get('/WebHeartRate',function(req, res, next) {
    var options = {
        host: '141.85.241.224',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=pulse&order_by=-timestamp&user=2'
    };
    var req = http.get(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var hrData = reqBody.measurements;
            console.log(hrData);
            res.render('HeartRate', { title: '', plotData:hrData});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });


});

router.get('/Weight',function(req, res, next) {
    var options = {
        host: '141.85.241.224',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=weight&order_by=-timestamp&user=2'
    };
    var req = http.get(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var wData = reqBody.measurements;
            console.log(wData);
            res.render('Weight', { title: 'Weight' , plotData:wData});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });


});

router.get('/WebWeight',function(req, res, next) {
    var options = {
        host: '141.85.241.224',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=weight&order_by=-timestamp&user=2'
    };
    var req = http.get(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var wData = reqBody.measurements;
            console.log(wData);
            res.render('Weight', { title: '' , plotData:wData});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });


});

router.get('/BloodPressure',function(req, res, next) {
    var options = {
        host: '141.85.241.224',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=blood_pressure&order_by=-timestamp&user=2'
    };
    var req = http.get(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var bpData = reqBody.measurements;
            console.log(bpData);
            res.render('BloodPressure', { title: 'Blood Pressure' , plotData:bpData});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });


});

router.get('/WebBloodPressure',function(req, res, next) {
    var options = {
        host: '141.85.241.224',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=blood_pressure&order_by=-timestamp&user=2'
    };
    var req = http.get(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var bpData = reqBody.measurements;
            console.log(bpData);
            res.render('BloodPressure', { title: '' , plotData:bpData});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });


});

var request = require('request');

router.post('/markAsDone', function(req, res, next) {
    console.log(req.body);
    if(req.body.remId)
    {
        var remId = req.body.remId;
        console.log(remId);
        var url = 'http://141.85.241.224:8008' +  '/api/v1/journal_entries/' + remId + '/';
        console.log(url);

            request({
               method: 'PATCH',
               uri: url,
               json: {'acknowledged' : true}
               
            }, function(error, request, body){
               console.log(body);
               res.redirect('/Reminders')
            });
        
        
    }
});

router.get('/RemindersCount', function(req, res, next) {
var options = {
    host: '141.85.241.224',
    port: 8008,
    path: '/api/v1/journal_entries/?user=2&acknowledged=none'
};

var req = http.get(options, function(response) {
    console.log('STATUS: ' + response.statusCode);
    console.log('HEADERS: ' + JSON.stringify(response.headers));
    // Buffer the body entirely for processing as a whole.
    var bodyChunks = [];
    response.on('data', function(chunk) {
        // You can process streamed parts here...
        bodyChunks.push(chunk);
    }).on('end', function() {
        var body = Buffer.concat(bodyChunks);

        var reqBody = JSON.parse(body);
        var rems = reqBody.objects;

        console.log(reqBody);
        var cnt = 0;
        var nCnt = 0;
        for(var i = 0; i < rems.length; i++)
        {
            if(rems[i].acknowledged == true)
            {
                nCnt = nCnt + 1;
            }
        }
        res.send(JSON.stringify({ count: rems.length - nCnt, ackCount: nCnt }));
    })
});

req.on('error', function(e) {
    console.log('ERROR: ' + e.message);
});


});

router.get('/Reminders',function(req, res, next) {
    var options = {
        host: '141.85.241.224',
        port: 8008,
        path: '/api/v1/journal_entries/?user=2&acknowledged=none'
    };
    var req = http.get(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var rems = reqBody.objects;

            console.log(reqBody);
            res.render('Reminders', { title: 'Reminders', reminders:rems});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });


});

router.get('/WebReminders',function(req, res, next) {
    var options = {
        host: '141.85.241.224',
        port: 8008,
        path: '/api/v1/journal_entries/?user=2&acknowledged=none'
    };
    var req = http.get(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function(chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function() {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var rems = reqBody.objects;

            console.log(reqBody);
            res.render('Reminders', { title: '', reminders:rems});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });


});

module.exports = router;
