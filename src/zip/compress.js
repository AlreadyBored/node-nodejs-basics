const fs = require('fs');
const path = require('path');

const compress = async () => {
    // Write your code here 
    const sourceFilePath = path.join(__dirname, 'fileToCompress.txt');
    const destinationFilePath = path.join(__dirname, 'archive.gz');

    const readStream = fs.createReadStream(sourceFilePath);
    const writeStream = fs.createWriteStream(destinationFilePath);

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