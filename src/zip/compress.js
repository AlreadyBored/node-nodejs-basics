import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const dirContext = 'files';
const fileToCompress = 'fileToCompress.txt';
const fileCompressed = 'archive.gz';
const fileErrorMessage = 'FS operation failed';

const compress = async () => {

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToCompressPath = path.join(__dirname, dirContext, fileToCompress);
    const fileToCompressedPath = path.join(__dirname, dirContext, fileCompressed);

    // check file presence
    fs.access(fileToCompressPath, fs.F_OK, (err) => {
        if (err) {
            // file is not found.
            throw new Error(fileErrorMessage);
        }
      
        // Prepare zlib & streams.
        const gzip = zlib.createGzip();
        const inFile = fs.createReadStream(fileToCompressPath);
        const outFile = fs.createWriteStream(fileToCompressedPath);
        // Compressing.
        inFile.pipe(gzip).pipe(outFile);   
    });
};

await compress();