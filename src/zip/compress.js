import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import * as path from 'node:path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compress = async () => {
    const inputFilePath = path.join(__dirname, 'files', 'fileToCompress.txt')
    const outputFilePath = path.join(__dirname, 'archive.gz')

    // Create a readable stream from the input file
    const readStream = createReadStream(inputFilePath)

    // Create a Gzip Transform Stream
    const gzipStream = createGzip()

    // Create a Writable Stream to the output file
    const writeStream = createWriteStream(outputFilePath)

    // Pipe the data through the Gzip stream and then to the output file
    readStream.pipe(gzipStream).pipe(writeStream)

    readStream.on('error', (err) => {
        console.error('Error reading file:', err);
    });

    writeStream.on('finish', () => {
        console.log(`File compressed successfully to ${outputFilePath}`);
    });

    writeStream.on('error', (err) => {
        console.error('Error writing compressed file:', err);
    });

};

await compress();