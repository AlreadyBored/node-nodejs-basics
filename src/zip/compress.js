import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const __dirname = path.resolve();

const compress = async () => {
    const fileToCompress = path.join(__dirname, 'files', 'fileToCompress.txt');
    const archive = path.join(__dirname, 'files', 'archive.gz');

    if (!fs.existsSync(fileToCompress) || fs.existsSync(archive)){
        throw new Error('FS operation failed');
    }

    const readFile = fs.createReadStream(fileToCompress);
    const writeIntoArchive = fs.createWriteStream(archive);
    const compressedZip = zlib.createGzip();

    readFile.pipe(compressedZip).pipe(writeIntoArchive);
};

await compress();