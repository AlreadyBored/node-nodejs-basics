import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//define file to read
const filePath = path.join(path.join(__dirname, 'files'), 'fileToRead.txt');

const read = async () => {
    if(!fs.existsSync(filePath)){
            throw new Error('FS operation failed');
    }
    fs.readFile(filePath, (err,data) => {
        if (err) throw err;
        console.log(data.toString());
    });
};

await read();