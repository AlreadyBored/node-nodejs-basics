import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createGzip } from 'node:zlib';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';

const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const directory = join(__dirname, 'files');
    const sourceFileName = 'fileToCompress.txt';
    const targetFileName = 'archive.gz';
    const sourceFilePath = join(directory, sourceFileName);
    const targetFilePath = join(directory, targetFileName)

    const source = createReadStream(sourceFilePath);
    const destination = createWriteStream(targetFilePath);
    const gzip = createGzip();
    const pipe = promisify(pipeline);
    
    await pipe(source, gzip, destination);
};

await compress();