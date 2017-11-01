var plotly = require('plotly')("alexandru.gavril.florin", "Hm5cNETMgSVvneArZXID");

var data = [{x:[0,1,2], y:[3,2,1], type: 'bar'}];
var layout = {fileopt : "overwrite", filename : "simple-node-example"};

function plot()
{
    plotly.plot(data, layout, function (err, msg) {
        if (err) return console.log(err);
        console.log(msg);
    });
}
