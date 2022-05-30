import fs from 'fs';

const INPUT = './files/wrongFilename.txt';
const OUTPUT = './files/properFilename.md';
const ERR_MESSAGE = 'FS operation failed';
const SUCCESS_MESSAGE = 'File is renamed successfully';

export const rename = async () => {
  if (!fs.existsSync(INPUT)) {
    throw new Error(ERR_MESSAGE);
  }
  if (fs.existsSync(OUTPUT)) {
    throw new Error(ERR_MESSAGE);
  }

  fs.rename(INPUT, OUTPUT, (err) => {
    if (err) throw err;
    console.log(SUCCESS_MESSAGE);
  });
};