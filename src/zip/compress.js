import { createReadStream, createWriteStream, existsSync } from 'fs';
import { createGzip } from 'zlib';

const compress = async () => {
    const source = './src/zip/files/fileToCompress.txt';
    const ziped = './src/zip/files/archive.gz';
    if (!existsSync(source)) {
        throw new Error('FS operation failed');
    }
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(ziped);
    const gzip = createGzip();
  
    readStream.pipe(gzip).pipe(writeStream);
  
    writeStream.on('finish', () => {
      console.log(`File ${source} compressed to ${ziped}`);
    });
  
    writeStream.on('error', (error) => {
      console.error('Error compressing the file:', error);
    });
};

await compress();