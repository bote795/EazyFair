var express = require('express');
    app = express();
// Retrieve
  Db = require('mongodb').Db,
  Server = require('mongodb').Server,
  Connection = require('mongodb').Connection, 
  MongoClient = require('mongodb').MongoClient;
  var db= new Db("test", new Server("localhost","27017"));
// Connect to the db
/*MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(!err) {
    dB = db;
    console.log("We are connected");
  }
});
*/
app.get('/', function(req, res){
    res.send('Hello World');
});
app.get('/add', function(req, res){
    db.open(function(err, p_db) {
      if(!err){
      console.log(req);
      var table = db.collection("test");
      table.insert({"name":"food"});  
      p_db.close();
      console.log("insertion");
    }
    });
    res.send('{"msg": "sucess"}');
});



app.listen(3000);
