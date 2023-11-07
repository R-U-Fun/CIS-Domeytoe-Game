const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Aaroophan:AaroophanMongoDB@cluster0.9y1xdpc.mongodb.net/";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) throw err;
  const collection = client.db("myDatabase").collection("myCollection");
  
  // The query parameter of the updateOne method is a query object defining which document to update
  const query = { "User_Aaroophan4.UserID": 1 };
  
  // The second parameter is an object defining the new values of the document
  const newValues = { $set: { "User_Aaroophan4.BestTime": 21 } };
  
  collection.updateOne(query, newValues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    client.close();
  });
});
