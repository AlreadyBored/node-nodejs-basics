import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const write = async () => {

    const file = path.join(__dirname, 'files', 'fileToWrite.txt');

    const fileContent = fs.createWriteStream(file);

    process.stdin.pipe(fileContent);
};

await write();