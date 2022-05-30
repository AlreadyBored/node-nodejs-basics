import fs from 'fs';

const INPUT = './files/fresh.txt';
const TEXT = 'I am fresh and young';
const ERR_MESSAGE = 'FS operation failed';
const SUCCESS_MESSAGE = 'File is created successfully';

export const create = async () => {
  if (fs.existsSync(INPUT)) {
    throw new Error(ERR_MESSAGE);
  }
  fs.writeFile(INPUT, TEXT, (err) => {
    if (err) throw err;
    console.log(SUCCESS_MESSAGE);
  });
};
