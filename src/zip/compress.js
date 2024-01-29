import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import path from 'node:path';

const compress = async () => {
    const rootPath = path.join(process.cwd(), 'src/zip/files');
    const input = path.join(rootPath, 'fileToCompress.txt');
    const output = path.join(rootPath, 'archive.gz');

    const gzip = createGzip();
    const source = createReadStream(input);
    const destination = createWriteStream(output);
    const pipe = promisify(pipeline);

    await pipe(source, gzip, destination);
};

await compress();
