'use strict';
const guid = require('../utils/string');

module.exports = function(app) {
  return function(req, res, next) {
    const body = req.body;
    let userCode = guid();

    app.service('users').create({
      email: body.email,
      userCode: userCode,
      userName: body.userName,
      password: body.password
    })
    .then(user => res.redirect('/login.html'))
    .catch(next);
  };
};
