const mongodb = require("mongodb").MongoClient;
const fs = require("fs");
//const {Schema} = mongoose

const url = "mongodb://localhost:27017/products";

mongodb.connect(url, (err, db) => {
  if (err) throw err;
  else {
    let se = db.db("product_data");    

    fs.readFile("./products.json", (ferr, data) => {
      if (ferr) throw ferr;      
      //console.log("file read")
      let arr = JSON.parse(data);
            
      se.collection("product").insertMany(arr, (ierr, resp) => {
        if (ierr) throw err;
        console.log(resp);
      });
    });
    console.log("connected");
    // db.close();
  }
});
