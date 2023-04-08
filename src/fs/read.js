import fs from "fs";

const read = async () => {
  fs.readFile(
    './src/fs/files/fileToRead.txt',
    {encoding: 'utf8'},
    (err, data) => {
      if (err) throw new Error('FS operation failed');
      console.log(data);
    }
  );
};

await read();