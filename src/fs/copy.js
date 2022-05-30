import fs from 'fs';

const INPUT = './files';
const OUTPUT = './files_copy';
const ERR_MESSAGE = 'FS operation failed';
const SUCCESS_MESSAGE = 'Files are copied successfully';

export const copy = async () => {
  if (!fs.existsSync(INPUT)) {
    throw new Error(ERR_MESSAGE);
  }
  if (fs.existsSync(OUTPUT)) {
    throw new Error(ERR_MESSAGE);
  }
  fs.cp(INPUT, OUTPUT, { recursive: true }, (err) => {
    if (err) throw err;
    console.log(SUCCESS_MESSAGE);
  });
};
