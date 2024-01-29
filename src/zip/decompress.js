import fs from 'fs';
import path from 'path';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const decompress = async () => {
    // Write your code here 
    const sourceFilePath = path.join(__dirname, 'archive.gz');
    const destinationFilePath = path.join(__dirname, 'fileToCompress.txt');

    const readStream = fs.promises.createReadStream(sourceFilePath);
    const writeStream = fs.promises.createWriteStream(destinationFilePath);

    const gunzip = zlib.createGunzip();

    readStream.pipe(gunzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`File decompressed successfully to ${destinationFilePath}`);
    });

    writeStream.on('error', (error) => {
        console.error(`Error decompressing the file: ${error.message}`);
    });
};

await decompress();