import { createReadStream, createWriteStream, existsSync } from 'fs';
import { createGunzip } from 'zlib';
const decompress = async () => {
    const source = './src/zip/files/archive.gz';
    const unziped = './src/zip/files/fileToCompress.txt';
    if (!existsSync(source)) {
        throw new Error('FS operation failed');
    }
    const readStream = createReadStream(source);
    const writeStream = createWriteStream(unziped);
    const gunzip = createGunzip();
  
    readStream.pipe(gunzip).pipe(writeStream);
  
    writeStream.on('finish', () => {
      console.log(`File ${source} compressed to ${unziped}`);
    });
  
    writeStream.on('error', (error) => {
      console.error('Error compressing the file:', error);
    });
};

await decompress();