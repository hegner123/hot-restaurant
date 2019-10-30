var express = require('express');
var path = require('path');

var app = express();

var PORT = process.env.PORT || 3000;

//data
var waitingTables = [

];
var reservedTables = [

]

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/reserve", function(req, res) {
    res.sendFile(path.join(__dirname, "views/reserve.html"));
});
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "views/tables.html"));
});
app.get("/api/tables", function(req, res) {
    return res.json(waitingTables);
});
app.get("/api/tables", function(req, res) {
    return res.json(reservedTables);
});

app.post("/api/reserve", function(req, res) {
    var newReserve = req.body;
    reservedTables.push(newReserve);
    res.json(reservedTables);
  });

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


