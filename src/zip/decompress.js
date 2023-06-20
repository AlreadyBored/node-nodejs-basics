import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import { pipeline } from 'stream';

const decompress = async () => {
    const filePath = './src/zip/files/fileToCompress.txt';
    const archivePath = './src/zip/files/archive.gz';
    const ReadStream = createReadStream(archivePath);
    const WriteStream = createWriteStream(filePath);
    const unzip = createUnzip();

    pipeline(ReadStream, unzip, WriteStream, (err) => {
        if (err) console.error('error:', err);
    });
};

await decompress();