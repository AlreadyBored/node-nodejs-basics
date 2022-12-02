import path from 'node:path';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    // Write your code here 
    const readStream = fs.createReadStream(`${__dirname}/files/fileToRead.txt`, {encoding:'utf-8'});

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    })

    readStream.on('end', () => {
        process.stdout.write('\n');
    })

    readStream.on('error', (err) => {
        if(err.code == 'ENOENT') {
            console.log('File not found');
        } else {
            throw (err);
        }
    })
};

await read();