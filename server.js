"use strict";
exports.__esModule = true;
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var https = require("https");
var http = require("http");
var fs = require("fs");

const httpApp = express();
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build'), { dotfiles: "allow" }));

// to support JSON-encoded bodies
app.use(bodyParser.json());

// Handles any requests that don't match the ones above
app.get('*', function (req, res) {
    console.log("incoming");
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

httpApp.set("port", 80);
httpApp.get("*", (req, res) => {
    res.redirect("https://" + req.headers.host + "/" + req.path);
});
http.createServer(httpApp).listen(httpApp.get("port"), () => {
    console.log("Listening (http)..."); 
});

var port = Number(process.env.PORT) || 443;

https.createServer({
    key: fs.readFileSync(path.join(__dirname, "build/certs/privkey.pem")),
    cert: fs.readFileSync(path.join(__dirname, "build/certs/cert.pem")),
    ca: fs.readFileSync(path.join(__dirname, "build/certs/chain.pem"))
}, app).listen(port, () =>  {
    console.log("Listening...");
});
console.log('App is listening on port ' + port);
