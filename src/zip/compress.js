import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { errorMessage, zipFilePath } from '../common/constants.js';

export const compress = async () => {
    const gzip = zlib.createGzip()
    const readStream = fs.createReadStream(path.join(zipFilePath, 'fileToCompress.txt'));
    const writeStream = fs.createWriteStream(path.join(zipFilePath, 'archive.gz'));

    writeStream.on('close', () => {
        fs.rm(
          path.join(zipFilePath, 'fileToCompress.txt'),
          (err) => {
          if(err) throw new Error(errorMessage);
        })
    })
    
    readStream.pipe(gzip).pipe(writeStream);
};

compress()