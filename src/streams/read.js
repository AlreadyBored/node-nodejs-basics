import * as fs from 'fs';
import * as process from 'process';
import * as path from 'path';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'fileToRead.txt');
const read = async () => {
    fs.createReadStream(FilePath).pipe(process.stdout);
};

await read();