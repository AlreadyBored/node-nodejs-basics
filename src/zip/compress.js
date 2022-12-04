import { dirname} from 'path';
import { createGzip } from 'node:zlib';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const compressPath = path.resolve(__dirname, 'files', 'archive.gz');

const compress = async () => {
    const gzip = createGzip();
    const first = createReadStream(filePath);
    const second = createWriteStream(compressPath);
    
    pipeline(
        first,
        gzip,
        second,
        (err) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log('successfully compressed');
            }
        }
    );
    
};

await compress();