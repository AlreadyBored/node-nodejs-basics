import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import {dirname, join} from 'node:path';
import { fileURLToPath } from 'node:url';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const sourceFile = join(__dirname, "files", 'fileToCompress.txt');
    const destinationFile = join(__dirname, 'archive.gz');

    try {
        
    const readStream = createReadStream(sourceFile);
    const writeStream = createWriteStream(destinationFile);
    const gzipStream = createGzip();

    await pipeline(
        readStream,
        gzipStream,
        writeStream
      );

      console.log('File compressed successfully');
    } catch (error) {
        console.error('Compression failed:', error);
    }

};

await compress();