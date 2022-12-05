import fs from 'fs';

const read = async () => {
  const filePath = './files/fileToRead.txt';

  const isFile = fs.existsSync(filePath);

  if (isFile) {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  } else {
    throw new Error('FS operation failed');
  }
};

await read();
