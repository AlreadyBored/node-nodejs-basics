import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const read = async () => {
    const filePath = path.join(dirname, 'files', 'fileToRead.txt');
    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
    readStream.pipe(process.stdout);
    readStream.on('error', console.error);
};

await read();
