import fs from 'fs';
import zlib from 'zlib';

const compress = async () => {
    const inputFilePath = './src/zip/files/fileToCompress.txt';
    const outputFilePath = './src/zip/files/archive.gz';

    const readStream = fs.createReadStream(inputFilePath);
    const gzip = zlib.createGzip();
    const writeStream = fs.createWriteStream(outputFilePath);
    
    readStream.pipe(gzip).pipe(writeStream).on('finish', () => {
        console.log(`File compressed successfully to ${outputFilePath}`);
    });
};

await compress();
