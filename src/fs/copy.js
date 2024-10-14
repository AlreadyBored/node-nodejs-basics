const fs = require('fs');
const path = require('path');

const copyFile = (src, dest) => {
  const readStream = fs.createReadStream(src);
  const writeStream = fs.createWriteStream(dest);

  readStream.pipe(writeStream)
    .on('finish', () => console.log(`Copied ${src} to ${dest}`))
    .on('error', (err) => console.log('Operation failed:', err));
};

module.exports = { copyFile };
