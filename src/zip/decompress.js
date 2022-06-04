import fs, { createWriteStream } from 'fs';
import zlib from 'zlib';
import path from 'path'
import { errorMessage, zipFilePath } from '../common/constants.js';

export const decompress = async () => {
    const unzip = zlib.createUnzip();
    const readStream = fs.createReadStream(path.join(zipFilePath, 'archive.gz'));
    const writeStream = fs.createWriteStream(path.join(zipFilePath, 'fileToCompress.txt'));

    writeStream.on('close', () => {
        fs.rm(
          path.join(zipFilePath, 'archive.gz'),
          (err) => {
          if(err) throw new Error(errorMessage);
        })  
    })
    
    readStream.pipe(unzip).pipe(writeStream);
};

decompress()