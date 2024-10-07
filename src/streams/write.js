import * as fs from 'fs';
import * as process from 'process';
import * as path from 'path';
const __dirname = import.meta.dirname
let FilePath = path.join(__dirname, 'files', 'fileToWrite.txt');
const write = async () => {
    process.stdin.pipe(fs.createWriteStream(FilePath));
};

await write();