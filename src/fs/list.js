import fs from 'fs';

const PATH = './files';
const ERR_MESSAGE = 'FS operation failed';

export const list = async () => {
  if (!fs.existsSync(PATH)) {
    throw new Error(ERR_MESSAGE);
  }

  fs.readdir(PATH, (err, files) => {
    if (err) throw err;
    
    console.log(files);
  });
};
