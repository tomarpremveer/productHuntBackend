let User = function (username, password) {
  this.username = username;
  this.password = password;
};
User.prototype.logIn = function () {
  return new Promise((resolve, reject) => {});
};
User.prototype.signUp = function () {
  return new Promise((resolve, rejecet) => {});
};
User.prototype.validate = function () {
  return new Promise((resolve, reject) => {});
};
User.prototype.profile = function () {
  return new Promise((resolve, reject) => {});
};
module.exports = User;
