const Product = require("../models/Product");
const { insertProducts } = require("../Faker");
exports.index = function (req, res, next) {
  var product = new Product();
  product
    .listAll()
    .then((data) =>
      res.status(200).json({ ok: true, products: data, count: data.length })
    )
    .catch((err) => res.status(200).json({ ok: false }));
};
exports.create = function (req, res) {
  var product = new Product(req.body);
  product
    .insert()
    .then((response) =>
      res.status(200).send("The Product was successfully posted")
    )
    .catch((err) => {
      res.status(503).send("Some Error occured", err);
    });
};
exports.upvote = function (req, res) {
  const {type,productId} = req.body;
  Product
  .vote(type,productId)
  .then(_=> res.status(200).send({success:true}))
  .catch(_ => res.status(503).send({success:false}));
};
exports.getItems = function (req, res) {};
exports.getItem = function (req, res) {};
exports.delete = function (req, res) {
  const { id } = req.params;
  Product.delete(id)
    .then((success) => res.status(200).send("Product was deleted"))
    .catch((err) => res.status(503).send("There was some error occured"));
};
exports.update = function (req, res) {};
exports.search = function (req, res) {};

