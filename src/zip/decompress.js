import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const __dirname = path.resolve();

const decompress = async () => {
    const archiveFile = path.join(__dirname, 'files', 'archive.gz');
    const decompressedFile = path.join(__dirname, 'files', 'decompressed.txt');

    if (!fs.existsSync(archiveFile)){
        throw new Error('FS operation failed');
    }

    const readArchive = fs.createReadStream(archiveFile);
    const writeDecompressedFile = fs.createWriteStream(decompressedFile);
    const decompressedZip = zlib.createGunzip();

    readArchive.pipe(decompressedZip).pipe(writeDecompressedFile);
};

await decompress();