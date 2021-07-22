const productsCollection = require("../db").collection("products");
const ObjectID = require('mongodb').ObjectID
let Product = function ({ name, owner, desc } = {}) {
  this.name = name;
  this.description = desc;
  this.owner = owner;
  this.upvotes = 0;
  this.postedDate = new Date().toJSON().slice(0, 10);
};
Product.prototype.getProduct = function (id) {
  return " ";
};
Product.prototype.listAll = function () {
  return new Promise(async (resolve, reject) => {
    var products = await productsCollection.find(
      {}, 
      { limit: 20,sort:{"upvotes": -1 }}).toArray();
    if (products.length) {
      resolve(products);
    } else {
      reject("No products were found");
    }
  });
};
Product.prototype.getProductsPaginated = function (pageNo) {
  return new Promise((resolve, reject));
};
Product.prototype.insert = function () {
  return new Promise((resolve, reject) => {
    productsCollection
      .insertOne(this)
      .then((info) => {
        console.log(info.ops[0]._id);
        resolve("success");
      })
      .catch((err) => {
        reject(err);
      });
  });
};
Product.vote = function(type,productId) {
  console.log("product id us",productId)
  return new Promise(async(resolve,reject)=>{
    let product = await productsCollection.findOne({_id:ObjectID(productId)})
    if(product != null){
      productsCollection.findOneAndUpdate({_id:ObjectID(productId)},{
        $inc:{"upvotes": type}
      }).then((info)=>{
        resolve(info);
      }).catch((err) =>{
        reject(err);
      })
    }else{
      reject("No product found for the id specified");
    }
  })
}
Product.delete = function (productId) {
  console.log("reached the route for deletion,", productId);
  return new Promise(async function (resolve, reject) {
    let product = await productsCollection.findOne({ _id: productId });
    if (product != null) {
      productsCollection
        .findOneAndDelete({ _id: productId })
        .then((result) => resolve(result))
        .catch((err) => reject(err));
    } else {
      reject("There was some error occured");
    }
  });
};

Product.prototype.update = function (item) {
  return new Promise((resolve, reject) => {});
};
Product.prototype.search = function (item) {
  return new Promise((resolve, reject) => {});
};
module.exports = Product;
