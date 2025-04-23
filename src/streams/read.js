import fs from 'fs';
import { constants } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');

    try {
        await fs.promises.access(fileToRead, constants.F_OK);
    
        const readStream = fs.createReadStream(fileToRead);

        readStream.on('data', data => {
            process.stdout.write(data + '\n');
        });

        readStream.on('error', err => {
            process.stdout.write(err + '\n');
        });
    }  catch (error) {
        throw new Error('FS operation failed');
    }
};

await read();