import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compress = async () => {
    const inputFilePath = path.join(__dirname, 'fileToCompress.txt');
    const outputFilePath = path.join(__dirname, 'archive.gz');

    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    const gzip = zlib.createGzip();

    input.pipe(gzip).pipe(output);

    console.log('Compression started...');

    output.on('finish', () => {
        console.log('Compression completed successfully!');
    });

    input.on('error', (err) => console.error('Error reading input file:', err));
    output.on('error', (err) => console.error('Error writing output file:', err));
};

await compress();
