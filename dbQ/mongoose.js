const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/test";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose.connect(url, options);
const db = mongoose.connection;

db.on('open', function(err, db) {
    // we're connected!
    if(err) throw err;
    console.log('conected')
  });

  // schema --> defined what keys the collection will have
  const userSchema = new mongoose.Schema({
      name : 'string',
  })

  // Model (user) --> it is a collection 
  const user = mongoose.model('user', userSchema);      

  // u1 --> instance of a Model (user) , is also called a Document

//   const u1 = new user({
//       name: 'abcd',
//       add: 'ckdja'
//   })

//const    = new user()

// u1.save((err,u1) => {
//     if(err) console.log('error occurred')
//     console.log(u1);
// })



// we can use the above commented code for saving the data or the below one

let obj = {
    name: 'u2'
}

user.create(obj, (err,data) => {
    if(err) throw err;
    console.log(data);
})


