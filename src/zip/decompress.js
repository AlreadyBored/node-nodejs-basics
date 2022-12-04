import { dirname} from 'path';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'stream';
import { fileURLToPath } from 'url';
import path from 'path';
import { createReadStream, createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const filePath = path.resolve(__dirname, 'files', 'fileToCompress.txt');
const compressPath = path.resolve(__dirname, 'files', 'archive.gz');

const decompress = async () => {
    const input = createReadStream(compressPath);
    const output = createWriteStream(filePath);
    const unzip = createUnzip();
    pipeline(
        input,
        unzip,
        output,
        (err) => {
            if (err) {
                console.log('error',err.message)
            } else {
                console.log('decompressed')
            }
        }


    )
};

await decompress();