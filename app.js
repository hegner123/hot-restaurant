var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;

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
app.get("/api/waitlist", function(req, res) {
    res.json(waitingTables);
});
app.get("/api/tables", function(req, res) {
    res.json(reservedTables);
});

app.post("/api/reserve", function(req, res) {
    req.body.customerID = reservedTables.length + 1;
    console.log("req.body.customerID",req.body.customerID)
    var newReserve = req.body;
    console.log(reservedTables.length);
    if (reservedTables.length >= 5){
        waitingTables.push(newReserve);
        res.json(waitingTables);
        console.log("Table Waitlisted");
    }else {
        reservedTables.push(newReserve);
        res.json(reservedTables);
        console.log("Table Reserved");
    };
  });


  //data
var waitingTables = [

];
var reservedTables = [

]

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


