const fs = require('node:fs');
const path = require('node:path');

const folderName = 'files';
const fileName = `fresh.txt`;
const content = 'I am fresh and young';
const errMsg = new Error('FS operation failed');

const targetPath = path.join(__dirname, folderName, fileName);

fs.stat(targetPath, (err, stats) => {
  if (err) {
    try {
      fs.writeFile(targetPath, content, (err) => {
        if (err) throw "Couldn't create file";
        console.log('File created successfully');
      });
    } catch (err) {
      console.error('Something went wrong');
    }
  } else if (stats) {
    throw errMsg;
  }
});
