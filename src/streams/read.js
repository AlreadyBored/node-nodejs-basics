import {createReadStream} from 'fs';
import {fileURLToPath} from 'url';
import path from 'path';
import {pipeline} from 'stream/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'files', 'fileToRead.txt');

const read = async () => {
    await pipeline(createReadStream(filePath), process.stdout)
};

await read();