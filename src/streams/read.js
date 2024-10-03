import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { pipeline} from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    try {
        const fileToRead = path.join(__dirname, 'files', 'fileToRead.txt');
        const readStream = fs.createReadStream(fileToRead, 'utf-8');
        readStream.on('data', (data) => {
            process.stdout.write(data + `\n`);
        });
    } catch(error) {
        throw new Error(error);
    }
};
await read();