import path from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';
import { pipeline } from 'stream';
import {
    createReadStream,
    createWriteStream
} from 'fs';
import { createUnzip } from 'zlib';

const pipe = promisify(pipeline);

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourcePath = path.join(__dirname, 'files', 'archive.gz');
const targetPath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const unzip = createUnzip();
    const source = createReadStream(sourcePath);
    const destination = createWriteStream(targetPath);
    await pipe(source, unzip, destination);
};

await decompress();