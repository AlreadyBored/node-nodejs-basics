import { createReadStream, createWriteStream } from 'fs';
import path from 'path';
import zlib from 'zlib';
import { pipeline } from 'stream';
const __dirname = path.dirname(process.argv[1]);



export const decompress = async () => {
    const decompress = zlib.createUnzip()
    const source = createReadStream(path.join(__dirname, '/files/archive.gz'));
    const destination = createWriteStream(path.join(__dirname, '/files/fileToCompress.txt'));

    pipeline(source, decompress, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

// decompress();