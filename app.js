let express = require('express');
let http = require('http');
let ejs = require('ejs');


let app = express();

app.set('view engine', 'ejs');

let port = 2300 | process.env.port;

app.use("/img", express.static(__dirname + "/public/image"));
app.use("/css", express.static(__dirname + "/public/css"));

app.use("/", require("./routes/mainpagesroutes"));



http.createServer(app).listen(port, () => {
    console.log("port number = " + port);
})