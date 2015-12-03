/*jshint esnext: true*/
var fs = require('co-fs');
var userFile = './user.json';

module.exports = {
  users : {
    get: function*() {
      var users = yield fs.readFile(userFile, 'utf-8');
      return JSON.parse(users);
    },

    save: function*(user) {
      var users = yield this.get();
      users.push(user);
      yield fs.writeFile(userFile, JSON.stringify(users));
    }

  }

};

