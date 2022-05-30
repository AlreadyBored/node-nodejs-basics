import fs from 'fs';

const FILE = './files/fileToRead.txt';
const ERR_MESSAGE = 'FS operation failed';

export const read = async () => {
  if (!fs.existsSync(FILE)) {
    throw new Error(ERR_MESSAGE);
  }

  fs.readFile(FILE, { encoding: 'utf-8' }, (err, data) => {
    if (err) throw err;
    console.log(data);
  });
};
