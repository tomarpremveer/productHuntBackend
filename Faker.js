const Faker = require("faker");
const Product = require("./models/Product");
exports.insertProducts = function () {
  for (let i = 0; i < 3000; i++) {
    var [name, desc, owner] = [
      Faker.commerce.productName(),
      Faker.commerce.productDescription(),
      Faker.internet.userName(),
    ];
    console.log(name, desc, owner);
    var product = new Product({ name, desc, owner });
    product
      .insert()
      .then((data) => {
        console.log("The id of the inserted item is ", data);
      })
      .catch((err) => {
        console.error("Some Error occured", err);
      });
  }
};
