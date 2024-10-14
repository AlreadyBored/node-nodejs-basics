const fs = require('fs');
const path = require('path');

const renameFile = (oldPath, newPath) => {
  fs.rename(oldPath, newPath, (err) => {
    if (err) console.log('Operation failed');
    else console.log(`Renamed ${oldPath} to ${newPath}`);
  });
};

module.exports = { renameFile };
