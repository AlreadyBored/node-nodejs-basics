import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const pathToRead = path.join(__dirname, "files", "fileToRead.txt");
    fs.exists(pathToRead, (isExists) => {
        if (!isExists) throw (`FS operation failed`);
    });
    fs.readFile(pathToRead, 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    })
};

await read();