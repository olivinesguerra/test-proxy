// var cors_proxy = require('cors-anywhere');

// // Listen on a specific host via the HOST environment variable
// var host = process.env.HOST || '0.0.0.0';
// // Listen on a specific port via the PORT environment variable
// var port = process.env.PORT || 8080;

// cors_proxy.createServer({
//     originWhitelist: [], // Allow all origins
//     requireHeader: ['origin', 'referer', "content-type"],
//     removeHeaders: ['cookie', 'cookie2']
// }).listen(port, host, function() {
//     console.log('Running CORS Anywhere on ' + host + ':' + port);
// });
var http = require('http');

const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require("cors");
const qs = require("qs");
const axios = require("axios");
const app = express();

app.use(cors());

app.post('/login', async function (req, res) {
    try {
        var postData = qs.stringify({"username":"mejwholesale@gmail.com","password":"M@steR12!@"});
          
        var reqs = http.request({
            method: 'POST',
            host: 'https://webapi.depop.com',
            path: '/api/v1/auth/login',
            headers: { 
                origin: 'https://www.depop.com/', 
                referer: 'https://www.depop.com/',
                'Content-Type': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(postData)
            },
        });
        console.log(reqs);
        reqs.on('error', function(err) {
            console.error(err);
        });
        reqs.write(postData);
        res.send('Hello World');
    }catch(err) {
        console.log(err);
    }
})

app.listen(5000, () => {
    console.log('alive');
});
