import * as fs from 'fs';
import  * as path from 'path';
import * as zlib from 'zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const decompress = async () => {
    const sourceArchiveFileName = 'archive.gz';
    const pathToSourceArchiveFileName = path.join(__dirname, '/files', sourceArchiveFileName);

    const destFileName = 'fileToCompress.txt';
    const pathToDestFileName = path.join(__dirname, '/files', destFileName);

    const readableStream = fs.createReadStream(pathToSourceArchiveFileName);
    const unCompressStream = zlib.createUnzip();
    const writableStream = fs.createWriteStream(pathToDestFileName );

    const handleError = () => {
        console.log('error');
        readstream.destroy();
        writestream.end('Finish with errors....')
    };

    readableStream
        .on('error', handleError)
        .pipe(unCompressStream)
        .on('error', handleError)
        .pipe(writableStream)
        .on('error', handleError);
};

decompress();
