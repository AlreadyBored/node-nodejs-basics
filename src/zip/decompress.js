import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const inputFilePath = path.join(__dirname, 'archive.gz');
    const outputFilePath = path.join(__dirname, 'fileToCompress.txt');

    const input = fs.createReadStream(inputFilePath);
    const output = fs.createWriteStream(outputFilePath);

    const gunzip = zlib.createGunzip();

    input.pipe(gunzip).pipe(output);

    console.log('Decompression started...');

    output.on('finish', () => {
        console.log('Decompression completed successfully!');
    });

    input.on('error', (err) => console.error('Error reading input file:', err));
    output.on('error', (err) => console.error('Error writing output file:', err));
};

await decompress();
