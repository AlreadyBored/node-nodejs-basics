import { fileURLToPath } from 'url';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const archiveFile = path.join(__dirname, 'files', 'archive.gz');

const readStream = createReadStream(fileToCompress);
const writeStream = createWriteStream(archiveFile);

const compress = async () => {
    // Write your code here 
    pipeline(readStream, 
             createGzip(), 
             writeStream, 
             (error) => console.error(error)
    );
};

await compress();