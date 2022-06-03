import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream'
import {join} from 'path';
import {fileURLToPath} from 'url';
import {promisify} from 'util';
import {createUnzip} from 'zlib';

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const pipe = promisify(pipeline);

export const decompress = async () => {
    const source = createReadStream(join(__dirname, 'files', 'archive.gz'));
    const dest = createWriteStream(join(__dirname, 'files', 'fileToCompress.txt'));
    const gzip = createUnzip();

    await pipe(source, gzip, dest);
};