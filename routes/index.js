var express = require('express');
var router = express.Router();
var http = require('http');
var urlLib = require('url');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/HeartRate/LastValue', function(req,res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
            var lastValue = reqBody.measurements[0].value_info;
            res.render('lastValuePages/HeartRateLastValue', {title: 'Heart Rate', lastValue: lastValue});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});

router.get('/HeartRate',function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
router.get('/Steps/LastValue', function(req,res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=steps&order_by=-timestamp&user=2'
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
            var lastValue = reqBody.measurements[0].value_info;
            var lasValue2= (lastValue.value - 0.000).toFixed(0);
            res.render('lastValuePages/StepsLastValue', {title: 'Steps', lastValue2: lasValue2});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});
router.get('/Steps',function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=steps&order_by=-timestamp&user=2'
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
            res.render('Steps', { title: 'Steps', plotData:hrData});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});

router.get('/Sleep/LastValue', function(req,res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=sleep&order_by=-timestamp&user=2'
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
            var lastValue = reqBody.measurements[0].value_info;
            var lasValue2= (lastValue.value - 0.000).toFixed(0);
            res.render('lastValuePages/SleepLastValue', {title: 'Sleep', lastValue2: lasValue2});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});
router.get('/Sleep',function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=sleep&order_by=-timestamp&user=2'
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
            res.render('Sleep', { title: 'Sleep', plotData:hrData});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});

router.get('/WebHeartRate',function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=pulse&order_by=-timestamp&user=2'
    };
    var req = http.get(options, function(response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function (chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function () {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);

            var hrData = reqBody.measurements;
            console.log(hrData);
            res.render('HeartRate', {title: '', plotData: hrData});
        });
    });
    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});


router.get('/Weight/LastValue', function(req,res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
            var lastValue = reqBody.measurements[0].value_info;
            var lasValue2= (lastValue.value - 0.000).toFixed(2);
            res.render('lastValuePages/WeightLastValue', {title: 'Weight', lastValue2: lasValue2});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});

router.get('/Weight',function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/measurement/?measurement_type=weight&order_by=-timestamp&user=2'
    };
    var req = http.get(options, function (response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function (chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function () {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);

            var wData = reqBody.measurements;
            console.log(wData);
            res.render('Weight', {title: '', plotData: wData});
        });
    });
});

router.get('/BloodPressure/LastValue', function(req,res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
            var lastValue = reqBody.measurements[0].value_info;
            res.render('lastValuePages/BloodPressureLastValue', {title: 'Blood Pressure', lastValue: lastValue});


        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});



router.get('/BloodPressure',function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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

function getRandomEvent() {
    var eventTypes = ["move", "hello"];
    var persons = [
        {
            "person_id": 0,
            "person_name": "Alex"
        },
        {
            "person_id": 1,
            "person_name": "Miruna"
        },
        {
            "person_id": 2,
            "person_name": "Stefania"
        },
        {
            "person_id": 3,
            "person_name": "Alex"
        }
    ];
    var eventType = Math.floor(Math.random() * (eventTypes.length));
    var chosenPerson = Math.floor(Math.random() * (persons.length));

    return {
        "type" : eventTypes[eventType],
        "person_id": persons[chosenPerson].person_id,
        "person_name": persons[chosenPerson].person_name
    };
}

router.get('/Events',function(req, res, next) {
    var events = [];

    var noOfEvents = 1 + Math.floor(Math.random() * 3);

    for(var i = 0 ; i < noOfEvents; i++)
    {
        events.push(getRandomEvent());
    }

    res.send(JSON.stringify(events));
});

router.get('/WebBloodPressure',function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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

router.post('/markAsDone/:id', function(req, res, next) {
    console.log(req.body);
    if(req.body.remId)
    {
        var remId = req.body.remId;
        var id = parseInt(req.params.id);

        console.log(remId);
        var timestamp = Math.floor(Date.now() / 1000);

        var url = 'http://cami.vitaminsoftware.com:8010' +  '/api/v1/insertion/events/';
        console.log(url);

            request({
               method: 'POST',
               uri: url,
               json: {
                   "category": "user_notifications",
                   "content": {
                       "name": "reminder_acknowledged",
                       "value_type": "complex",
                       "value": {
                           "ack": "ok",
                           "user": { "id": 2 },
                           "journal": {"id": parseInt(remId)},
                   }
               },
                "annotations": {
                    "timestamp": timestamp,
                    "source": "pepper_robot"
                }
            }
               
            }, function(error, request, body){
               console.log(body);
               if(id === -1)
                   res.redirect('/Reminders');
                else
               {
                   setTimeout(function f(){
                       res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
                       var u = urlLib.parse(req.get('Referrer'), true, false);
                       u.query['v'] = +new Date(); // add versioning to bust cache
                       delete u.search;
                       console.log(urlLib.format(u));
                       res.redirect(urlLib.format(u));
                   }, 500);
               }
            });
    }
});

router.get('/Reminders/Count', function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/journal_entries/?user=2'
    };

    var req = http.get(options, function (response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function (chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function () {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var rems = reqBody.objects;

            console.log(reqBody);
            var cnt = 0;
            var nCnt = 0;
            for (var i = 0; i < rems.length; i++) {
                if (rems[i].acknowledged === true || rems[i].acknowledged === false) {
                    nCnt = nCnt + 1;
                }

            }

            res.render('RemindersCount', { title: 'Reminders', count:rems.length - nCnt, ackCount: nCnt});
        });
    });
});


router.get('/RemindersCount', function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/journal_entries/?user=2'
    };

    var req = http.get(options, function (response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function (chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function () {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var rems = reqBody.objects;

            console.log(reqBody);
            var cnt = 0;
            var nCnt = 0;
            for (var i = 0; i < rems.length; i++) {
                if (rems[i].acknowledged === true || rems[i].acknowledged === false) {
                    nCnt = nCnt + 1;
                }
            }
            res.send(JSON.stringify({count: rems.length - nCnt, ackCount: nCnt}));
        });
    });
});

router.get('/RemindersWebApp/:id', function(req,res,next)
{
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/journal_entries/?user=2'
    };
    console.log(JSON.stringify(req.body));

    console.log(JSON.stringify(req.params));
    if(req.params && req.params.id) {
        var id = parseInt(req.params.id);

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
                var remindersNotSeen = [];
                var cnt = 0;
                var nCnt = 0;

                for (var i = 0; i < rems.length; i++) {
                    if (rems[i].acknowledged === true || rems[i].acknowledged === false) {
                        nCnt = nCnt + 1;
                    }
                    else {
                        remindersNotSeen.push(rems[i]);
                    }
                }

                var cRems = [];
                if(remindersNotSeen.length !== 0)
                {
                    if(id < 0)
                        cRems.push(remindersNotSeen[remindersNotSeen.length - 1]);
                    else if(id > remindersNotSeen.length - 1)
                        cRems.push(remindersNotSeen[0]);
                    else
                        cRems.push(remindersNotSeen[id]);
                }

                var package = {"id": id, "reminders": cRems, "last": remindersNotSeen.length - 1};
                res.render('RemindersWebApp', { title: 'Reminders', package:package});
            })
        });

        req.on('error', function(e) {
            console.log('ERROR: ' + e.message);
        });
    }

});

router.get('/Reminders/:id', function(req,res,next)
{
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/journal_entries/?user=2'
    };
    console.log(JSON.stringify(req.body));

    console.log(JSON.stringify(req.params));
    if(req.params && req.params.id) {
        var id = parseInt(req.params.id);

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
                var remindersNotSeen = [];
                var cnt = 0;
                var nCnt = 0;

                for (var i = 0; i < rems.length; i++) {
                    if (rems[i].acknowledged === true || rems[i].acknowledged === false) {
                        nCnt = nCnt + 1;
                    }
                    else {
                        remindersNotSeen.push(rems[i]);
                    }
                }

                var cRems = [];
                if(remindersNotSeen.length !== 0)
                {
                    if(id < 0)
                        cRems.push(remindersNotSeen[remindersNotSeen.length - 1]);
                    else if(id > remindersNotSeen.length - 1)
                        cRems.push(remindersNotSeen[0]);
                    else
                        cRems.push(remindersNotSeen[id]);
                }

                var package = {"id": id, "reminders": cRems, "last": remindersNotSeen.length - 1};
                res.render('Reminders', { title: 'Reminders', package:package});
            })
        });

        req.on('error', function(e) {
            console.log('ERROR: ' + e.message);
        });
    }

});

router.get('/Reminders',function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/journal_entries/?user=2'
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
            var remindersNotSeen = [];
            var cnt = 0;
            var nCnt = 0;
            for (var i = 0; i < rems.length; i++) {
                if (rems[i].acknowledged === true || rems[i].acknowledged === false) {
                    nCnt = nCnt + 1;
                }
                else {
                    remindersNotSeen.push(rems[i]);
                }
            }

            console.log(reqBody);
            var package = {"id": -1, "reminders": remindersNotSeen};
            res.render('Reminders', { title: 'Reminders', package:package});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});

router.get('/WebReminders',function(req, res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
            res.render('WebReminders', { title: '', reminders:rems});
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});


router.get('/RemindersWeb',function(req, res, next) {

    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/journal_entries/?user=2'
    };
    var req = http.get(options, function (response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function (chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function () {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var rems = reqBody.objects;

            console.log(reqBody);
            var cnt = 0;
            var nCnt = 0;
            for (var i = 0; i < rems.length; i++) {
                if (rems[i].acknowledged === true || rems[i].acknowledged === false) {
                    nCnt = nCnt + 1;
                }
            }
            if ((rems.length - nCnt) === 0) {
                res.render('RemindersWeb', {count: "You do not have any Reminders."});
                //res.render('RemindersWeb', { count:rems.length - nCnt});
            }
            if ((rems.length - nCnt) === 1) {
                res.render('RemindersWeb', {count: "You have " + (rems.length - nCnt) + " new Reminder."});
                //res.render('RemindersWeb', { count:rems.length - nCnt});
            }
            if ((rems.length - nCnt) > 1) {
                res.render('RemindersWeb', {count: "You have " + (rems.length - nCnt) + " new Reminders."});
                //res.render('RemindersWeb', { count:rems.length - nCnt});
            }
        });
    });
});

router.get('/ReminderWebWidget',function(req, res, next) {

    var options = {
        host: 'cami.vitaminsoftware.com',
        port: 8008,
        path: '/api/v1/journal_entries/?user=2'
    };
    var req = http.get(options, function (response) {
        console.log('STATUS: ' + response.statusCode);
        console.log('HEADERS: ' + JSON.stringify(response.headers));
        // Buffer the body entirely for processing as a whole.
        var bodyChunks = [];
        response.on('data', function (chunk) {
            // You can process streamed parts here...
            bodyChunks.push(chunk);
        }).on('end', function () {
            var body = Buffer.concat(bodyChunks);

            var reqBody = JSON.parse(body);
            var rems = reqBody.objects;

            console.log(reqBody);
            var cnt = 0;
            var nCnt = 0;
            for (var i = 0; i < rems.length; i++) {
                if (rems[i].acknowledged === true || rems[i].acknowledged === false) {
                    nCnt = nCnt + 1;
                }
            }
           res.render('ReminderWebWidget', {count:rems.length - nCnt});
        });
    });
});

router.get('/calc/CalcWeight', function(req,res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
            var lastValue = reqBody.measurements[0].value_info;
            var beforeLastValue = reqBody.measurements[1].value_info;
            var diffwval= (beforeLastValue.value - lastValue.value).toFixed(3);
            //res.render('calc/CalcWeight', {title: 'Weight',lastValue: lastValue, beforeLastValue: beforeLastValue, abcd: abcd });

            if (diffwval < 0) {
                res.render('calc/CalcWeight', {title: 'Weight',lastValue: "You have gained " + (-diffwval) + " Kg."});
                //res.render('calc/CalcWeight', {title: 'Weight',lastValue: lastValue,beforeLastValue: beforeLastValue});
            }
            if (diffwval == 0) {
                res.render('calc/CalcWeight', {title: 'Weight',lastValue: "Your Weight is stable."});
            }
            if (diffwval > 0) {
                res.render('calc/CalcWeight', {title: 'Weight',lastValue: "You have lost " + (diffwval) + " Kg."});
            }
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});

router.get('/calc/CalcHeartRate', function(req,res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
            var lastValue = reqBody.measurements[0].value_info;
            var beforeLastValue = reqBody.measurements[1].value_info;
            var diffwval= (beforeLastValue.value - lastValue.value).toFixed(0);
            if (diffwval < 0) {
                res.render('calc/CalcHeartRate', {title: 'Heart Rate',lastValue: "Your Heart Rate increased by " + (-diffwval) + " bpm."});
                //res.render('calc/CalcWeight', {title: 'Weight',lastValue: lastValue,beforeLastValue: beforeLastValue});
            }
            if (diffwval == 0) {
                res.render('calc/CalcHeartRate', {title: 'Heart Rate',lastValue: "Your Heart Rate is stable."});
            }
            if (diffwval > 0) {
                res.render('calc/CalcHeartRate', {title: 'Heart Rate',lastValue: "Your Heart Rate decreased by " + (diffwval) + " bpm."});
            }
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});

router.get('/calc/CalcBloodPressure', function(req,res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
            var lastValue = reqBody.measurements[0].value_info.systolic;
            var beforeLastValue = reqBody.measurements[1].value_info.systolic;
            var diffwval= (beforeLastValue - lastValue).toFixed(0);
            if (diffwval < 0) {
                res.render('calc/CalcBloodPressure', {title: 'Systolic Blood Pressure',lastValue: "Your Systolic Blood Pressure increased by " + (-diffwval) + " bp."});
            }
            if (diffwval === 0) {
                res.render('calc/CalcBloodPressure', {title: 'Systolic Blood Pressure',lastValue: "Your Systolic Blood Pressure is stable."});
            }
            if (diffwval > 0) {
                res.render('calc/CalcBloodPressure', {title: 'Systolic Blood Pressure',lastValue: "Your Systolic Blood Pressure decreased by " + (diffwval) + " bp."});
            }
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});

router.get('/calc/CalcBloodPressureDiastolic', function(req,res, next) {
    var options = {
        host: 'cami.vitaminsoftware.com',
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
            var lastValue = reqBody.measurements[0].value_info.diastolic;
            var beforeLastValue = reqBody.measurements[1].value_info.diastolic;
            var diffwval= (beforeLastValue - lastValue).toFixed(0);
            if (diffwval < 0) {
                res.render('calc/CalcBloodPressureDiastolic', {title: 'Diastolic Blood Pressure',lastValue: "Your Diastolic Blood Pressure increased by " + (-diffwval) + " bp."});
            }
            if (diffwval === 0) {
                res.render('calc/CalcBloodPressureDiastolic', {title: 'Diastolic Blood Pressure',lastValue: "Your Diastolic Blood Pressure is stable."});
            }
            if (diffwval > 0) {
                res.render('calc/CalcBloodPressureDiastolic', {title: 'Diastolic Blood Pressure',lastValue: "Your Diastolic Blood Pressure decreased by " + (diffwval) + " bp."});
            }
        })
    });

    req.on('error', function(e) {
        console.log('ERROR: ' + e.message);
    });
});

module.exports = router;



