var app = require('http').createServer(handler)  , io = require('socket.io').listen(app) , fs = require('fs');
app.listen(9001);



function handler (req, res) {


    console.log(req.url);
    console.log(req.url.indexOf("sendLeft"));

    if(req.url.indexOf("sendLeft")>-1)
    {
        console.log(1);
        fs.readFile( __dirname + '/sendLeft.html', function (err, data) {
            if (err) {
                res.writeHead(500);
            }
            res.writeHead(200);
            res.end(data);
        });
    }

    else if(req.url.indexOf("sendRight")>-1)
    {
        console.log(2);
        fs.readFile( __dirname + '/sendRight.html', function (err, data) {
            if (err) {
                res.writeHead(500);
            }
            res.writeHead(200);
            res.end(data);
        });
    }

    else
    {
        console.log(3);
        fs.readFile( __dirname + '/send.html', function (err, data) {
            if (err) {
                res.writeHead(500);
            }
            res.writeHead(200);
            res.end(data);
        });
    }


}

io.sockets.on('connection', function (socket) {

	console.log("####");

    socket.emit('news', { hello: 'world' });
    socket.on('send', function (data) {

		console.log(data);
	
        if(data.id==1)
        {
            socket.broadcast.emit('left',data);
        }
        else {
            socket.broadcast.emit('right',data);
        }



    });

});