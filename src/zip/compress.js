import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const compress = async () => {
    // Write your code here 
    const sourceFilePath = path.join(__dirname, 'fileToCompress.txt');
    const destinationFilePath = path.join(__dirname, 'archive.gz');

    const readStream = fs.promises.createReadStream(sourceFilePath);
    const writeStream = fs.promises.createWriteStream(destinationFilePath);

    const gzip = zlib.createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`File compressed successfully to ${destinationFilePath}`);
    });

    writeStream.on('error', (error) => {
        console.error(`Error compressing the file: ${error.message}`);
    });
};

await compress();