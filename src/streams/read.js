import fs from 'fs';
import path from 'path';

const __dirname = path.resolve();

const read = async () => {

    const file = path.join(__dirname, 'files', 'fileToRead.txt');

    const fileContent = fs.createReadStream(file, 'utf-8');

    fileContent.pipe(process.stdout);
};

await read();