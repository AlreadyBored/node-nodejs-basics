import path from 'path';
import { fileURLToPath } from 'url';
import { createReadStream, createWriteStream } from 'fs';
import zlib from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const decompress = async () => {
    const compressedFilePath = path.resolve(__dirname, 'files', 'archive.gz');
    const decompressedFilePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');

    const compressedStream = createReadStream(compressedFilePath);
    const decompressedStream = createWriteStream(decompressedFilePath);

    compressedStream.pipe(zlib.createGunzip()).pipe(decompressedStream);
};

await decompress();
