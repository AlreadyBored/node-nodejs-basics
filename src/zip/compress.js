import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream'
import {join} from 'path';
import {fileURLToPath} from 'url';
import {promisify} from 'util';
import {createGzip} from 'zlib'

const __dirname = fileURLToPath(new URL('.', import.meta.url));

const pipe = promisify(pipeline);

export const compress = async () => {
    const source = createReadStream(join(__dirname, 'files', 'fileToCompress.txt'));
    const dest = createWriteStream(join(__dirname, 'files', 'archive.txt.gz'));
    const gzip = createGzip();

    await pipe(source, gzip, dest);
};