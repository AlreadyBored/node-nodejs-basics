import fs from 'node:fs';
import { readFile } from 'node:fs';

const read = async () => {
    try {
        const filename = "./src/fs/files/fileToRead.txt";
        if (!fs.existsSync(filename)) {
            throw new Error("FS operation failed");
        }

        readFile(filename, (err, data) => {
          if (err) throw err;
          console.log(data.toString());
        });

      } catch (err) {
        throw new Error("FS operation failed");
      }};

await read();

