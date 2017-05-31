var mongoose = require('mongoose');
var Users = mongoose.model('Users');

module.exports.usersGetAll = function(req, res) {
  console.log('GET all users');
  Users.
    find().
    exec(function(err, users) {
      console.log(err);
      if (err) {
        console.log("Error finding articles");
        res
          .status(500)
          .json(err);
        } else {
          console.log("Found users", users.length);
          res.json(users);
        }
    });
};
