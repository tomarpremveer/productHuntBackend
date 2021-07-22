const MongoClient = require("mongodb").MongoClient;
const port = process.env.PORT || 3001;
const url = "mongodb://localhost:27017/";

MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
  if (err) console.log(err);
  const db = client.db("productHunt");
  module.exports = db;
  const app = require("./index");
  app.listen(port, () => {
    console.log(`The server is running on port ${port}`);
  });
});
