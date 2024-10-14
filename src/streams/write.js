const fs = require('fs');

const writeFileStream = (filePath, data) => {
  const writeStream = fs.createWriteStream(filePath);
  writeStream.write(data, 'utf8');
  writeStream.end();
};

module.exports = { writeFileStream };
