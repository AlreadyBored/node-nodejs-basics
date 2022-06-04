import * as fs from 'fs';
import  * as path from 'path';
import * as zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const compress = async () => {
    const sourceFileName = 'fileToCompress.txt';
    const pathToSourceFileName = path.join(__dirname, '/files', sourceFileName);

    const archiveFileName = 'archive.gz';
    const pathToArchiveFileName = path.join(__dirname, '/files', archiveFileName);

    const readableStream = fs.createReadStream(pathToSourceFileName, 'utf-8');
    const compressStream = zlib.createGzip();
    const writableStream = fs.createWriteStream(pathToArchiveFileName);

    const handleError = () => {
        console.log('error');
        readstream.destroy();
        writestream.end('Finish with errors....')
    };

    readableStream
        .on('error', handleError)
        .pipe(compressStream)
        .on('error', handleError)
        .pipe(writableStream)
        .on('error', handleError);
};

compress();
