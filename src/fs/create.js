import fs from 'node:fs';
import path from 'node:path';

const __dirname = path.resolve();
const fileName = 'fresh.txt';
const folderPath = path.join(__dirname, 'src', 'fs', 'files');;
const targetPath = path.join(folderPath, fileName);
const content = 'I am fresh and young';
const errMsg = new Error('FS operation failed');

fs.stat(targetPath, (err, stats) => {
  if (!err && stats.isFile()) {
    throw errMsg;
  } else if (err && err.code !== 'ENOENT') {
    console.error('Unexpected error:', err);
  } else {
    fs.mkdir(folderPath, { recursive: true }, (err) => {
      if (err) {
        console.error('Failed to create directory:', err);
        return;
      }

      fs.writeFile(targetPath, content, (err) => {
        if (err) {
          console.error('Could not create file:', err);
        } else {
          console.log('File created successfully');
        }
      });
    });
  }
});
