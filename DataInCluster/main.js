
// inseert data to the mongodb cluster

const config = require('./configuration/config');
const Product = require('./models/products');
config();


// data to be saved
 const dt = {
        //"_id":"1",        
        "product": "gloves",
        "price": 1000,
        "path": "images/glovs.jpg",
        "description": "this is  3ea",
        "isAddToCart": false,
    }
    
    // ob => instance of Model( product ) => document
    // const ob = new Product(dt)  ;
    // ob.save().then(item => {
    //     console.log(item);
    // }).catch(err => {
    //     console.log(err);
    // })

    // OR

    // ob => instance of Model( product ) => document    
    const ob = new Product(dt)  ;

    ob.save((err, ob) => {
        if(err)
        console.log(err);

        console.log(ob);
    })

    