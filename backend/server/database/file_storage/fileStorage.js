const fs = require('fs');
const guid = require('node-uuid');

class FileStorage {
  constructor(path) {
    this.path = path;
  }

  addFile(file) {
    const uid = guid.v1();
    try {
      fs.writeFileSync(`${this.path}/${uid}`, file);
      return uid;
    } catch (err) {
      console.log(err);
      throw (err);
    }
  }

  getFile(uid) {
    try {
      return fs.readFileSync(`${this.path}/${uid}`);
    } catch (err) {
      console.log(err);
      throw (err);
    }
  }
}

module.exports = FileStorage;
