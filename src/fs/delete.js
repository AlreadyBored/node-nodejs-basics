const fs = require('fs');
const path = require('path');

const deleteFile = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) console.log('Operation failed');
    else console.log(`${filePath} deleted`);
  });
};

module.exports = { deleteFile };
