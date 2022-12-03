import fs  from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const currentPath = path.dirname(fileURLToPath(import.meta.url));
    const filePath = currentPath + '/files/fileToRead.txt';

    if (!fs.existsSync(filePath)) {
        throw 'FS operation failed';
    }

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            throw 'FS operation failed';
        }
        console.log(data);
      });
};

await read();