import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToInitFile = join(__dirname, 'files', 'fileToCompress.txt');
const pathToNewFile = join(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const readStream = createReadStream(pathToInitFile);
    const writeStream = createWriteStream(pathToNewFile);
    const compress = createGzip();
    
    pipeline(readStream, compress, writeStream, (err) => {
        if(err) throw err;
        process.stdout.write('The process was successful!');
    })
};

await compress();