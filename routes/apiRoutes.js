var data = require("../data/data.js")

module.exports = function(app){
    app.get("/api/tables", function(req, res){
        res.send(data.tableRes)
    });

    app.get("/api/waitlist", function(req, res){
        res.send(data.waitList);
    });

    app.post("/api/reservations", function(req, res){
        if (data.tableRes.length < 5){
            data.tableRes.push(req.body);
            res.json(true)
        } else {
            data.waitList.push(req.body);
            res.json(false);
        }
    });


}



