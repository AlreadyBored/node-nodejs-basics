import {createGzip} from 'node:zlib';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { createReadStream, createWriteStream } from 'node:fs';

const compress = async () => {
    const __dirname = `${dirname(fileURLToPath(import.meta.url))}/files`;

    const gzib = createGzip()
    const targetFile = createReadStream(`${__dirname}/fileToCompress.txt`);
    const archiveFile = createWriteStream(`${__dirname}/archive.gz`);

    targetFile.pipe(gzib).pipe(archiveFile)
};

await compress();