import fs from 'fs';

const FILE = './files/fileToRemove.txt';
const ERR_MESSAGE = 'FS operation failed';
const SUCCESS_MESSAGE = 'File is deleted successfully';

export const remove = async () => {
  if (!fs.existsSync(FILE)) {
    throw new Error(ERR_MESSAGE);
  }

  fs.unlink(FILE, (err) => {
    if (err) throw err;
    console.log(SUCCESS_MESSAGE);
  });
};

remove();