import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const dirContext = 'files';
const fileToUnpack = 'archive.gz';
const fileUnpacked = 'fileToCompress.txt';
const fileErrorMessage = 'FS operation failed';

const decompress = async () => {

    const __dirname = dirname(fileURLToPath(import.meta.url));
    const fileToUnpackPath = path.join(__dirname, dirContext, fileToUnpack);
    const fileUnpackedPath = path.join(__dirname, dirContext, fileUnpacked);

    // check file presence
    fs.access(fileToUnpackPath, fs.F_OK, (err) => {
        if (err) {
            // file is not found.
            throw new Error(fileErrorMessage);
        }
      
        // Prepare zlib & streams.
        const zip = zlib.createUnzip();
        const inFile = fs.createReadStream(fileToUnpackPath);
        const outFile = fs.createWriteStream(fileUnpackedPath);
        // Unpacking.
        inFile.pipe(zip).pipe(outFile);   
    });
};

await decompress();