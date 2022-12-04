import { readFile } from 'node:fs';
export const read = async () => {
  readFile("./files/fileToRead.txt", "utf8", (error, data) => {
    error ? console.log('FS operation failed\n',error) : console.log(data);
  });
};

read();