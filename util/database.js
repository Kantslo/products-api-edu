const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

MongoClient.connect(
  "mongodb+srv://gqancliani:ZTY2kuaKErmQ6jJ2@cluster0.tqqlpyv.mongodb.net/"
)
  .then((result) => {
    console.log("Connected!");
  })
  .catch((err) => console.log(err));
