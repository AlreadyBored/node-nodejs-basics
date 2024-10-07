import fs from 'fs';
import path from 'path';
import url from 'url';

const read = async () => {
    // Write your code here 
    // console.log(process.cwd());
    const __filename = url.fileURLToPath(import.meta.url);
    const file = path.join(path.dirname(__filename), 'files', 'fileToRead.txt');

    const readStream = fs.createReadStream(file, 'utf-8');
    readStream.pipe(process.stdout);

    readStream.on('error', (error) => {
        console.error('Error while reading file:', error);
    });
};

await read();