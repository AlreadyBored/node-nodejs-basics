import fs from 'node:fs';
import zlib from 'node:zlib';
import path from 'node:path';
import url from 'node:url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const fileToDecompressPath = path.join(__dirname, 'files', 'archive.gz');
const decompressedFilePath = path.join(__dirname, 'files', 'fileToCompress.txt');

const decompress = async () => {
    const unzip = zlib.createUnzip();
    const readStream = fs.createReadStream(fileToDecompressPath);
    const writeStream = fs.createWriteStream(decompressedFilePath);

    readStream.pipe(unzip).pipe(writeStream);
};

await decompress();