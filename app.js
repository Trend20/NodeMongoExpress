//require the mongoClient from mongodb module
var MongoClient = require('mongodb').MongoClient;

//mongodb configs
var connectionUrl = 'mongodb://localhost:27017/myproject',
    sampleCollection = 'chapters';

//We need to insert these chapters into mongoDB
var chapters = [{
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}, {
    'Title': 'Snow Crash',
    'Author': 'Neal Stephenson'
}];

MongoClient.connect(connectionUrl, { useUnifiedTopology: true }, function(err, client) {

    console.log("Connected correctly to server");

    // Get some collection
    var db = client.db('myproject');

    var collection = db.collection(sampleCollection);

    db.collection('chapters').findOne({}, function(error, result) {
        //here result will contain an array of records inserted
        if (!error) {
            console.log("Success :" + " chapters inserted sucessfully!");
        } else {
            console.log("Some error was encountered!");
        }
        client.close();
    });
});