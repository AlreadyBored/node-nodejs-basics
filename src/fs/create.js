const fs = require('fs');
const path = require('path');

const createFile = (fileName, currentDir) => {
  const filePath = path.join(currentDir, fileName);
  
  fs.writeFile(filePath, '', (err) => {
    if (err) {
      console.log(`Operation failed: ${err.message}`);
    } else {
      console.log(`${fileName} created successfully in ${currentDir}`);
    }
  });
};

module.exports = { createFile };
