import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentPath = fileURLToPath(import.meta.url);
const currentDir = dirname(currentPath);

const gzip = createGzip();
const src = createReadStream(currentDir + '/files/fileToCompress.txt');
const dst = createWriteStream(currentDir + '/files/archive.gz');

const compress = async () => {
    
    pipeline(src, gzip, dst, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
          }
    });

};

await compress();