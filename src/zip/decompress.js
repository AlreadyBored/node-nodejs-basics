import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';

const compress = () => {
    const inputFilePath = 'files/fileToCompress.txt';
    const outputFilePath = 'archive.gz';

    const readStream = createReadStream(inputFilePath);
    const writeStream = createWriteStream(outputFilePath);
    const gzip = createGzip();

    readStream.pipe(gzip).pipe(writeStream);

    writeStream.on('finish', () => {
        console.log(`Compression successful. Output file: ${outputFilePath}`);
    });

    writeStream.on('error', (error) => {
        console.error(`Error during compression: ${error.message}`);
    });
};

compress();
