import {createGzip} from 'node:zlib';
import {pipeline} from 'node:stream';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {createReadStream, createWriteStream,} from 'node:fs';
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const compress = async () => {
    const targetFile = join(__dirname,'/files/fileToCompress.txt');
    const gzip = createGzip();
    const writeStream = createWriteStream(join(__dirname, '/files/fileToCompress.gz'));
    const readStream = createReadStream(targetFile);

    pipeline(readStream, gzip, writeStream, (err) => {
        if (err) {
            console.error(err);
        }
    });
   };

await compress();