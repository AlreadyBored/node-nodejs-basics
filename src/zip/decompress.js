import { fileURLToPath } from 'url';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createUnzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
const archiveFile = path.join(__dirname, 'files', 'archive.gz');

const readStream = createReadStream(archiveFile);
const writeStream = createWriteStream(fileToCompress);

const decompress = async () => {
    // Write your code here 
    pipeline(readStream, 
        createUnzip(), 
        writeStream, 
        (error) => console.error(error)
    );
};

await decompress();