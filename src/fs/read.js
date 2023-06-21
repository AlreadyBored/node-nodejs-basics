import fs from "fs";

const read = async () => {
     fs.stat('./src/fs/files/fileToRead.txt', (err, stats) => {
        if (!stats) {
          throw Error("FS operation failed");
        }
      });
    fs.createReadStream('./src/fs/files/fileToRead.txt').setEncoding('utf8').pipe(process.stdout)
};

await read();
