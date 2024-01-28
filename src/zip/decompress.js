import {createUnzip} from 'node:zlib';
import {pipeline} from 'node:stream';
import { dirname,join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {createReadStream, createWriteStream,} from 'node:fs';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);

const decompress = async () => {
    const targetFile = join(__dirname,'/files/fileToCompress.gz');
    const unzip = createUnzip();
    const writeStream = createWriteStream(join(__dirname, '/files/fileToCompress2.txt'));
    const readStream = createReadStream(targetFile);

    pipeline(readStream, unzip, writeStream, (err) => {
        if (err) {
            console.error(err);
        }

    })

};

await decompress();