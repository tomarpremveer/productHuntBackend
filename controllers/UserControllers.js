const User = require("../models/User");

exports.logIn = function (req, res, next) {
  console.log("we've reached the route for login");
  console.log("here is some data that came with the request", req.body);
  res.status(200).json({ success: true });
};
exports.signUp = function (req, res, next) {
  User.signUp();
};
exports.logOut = function (req, res, next) {};
