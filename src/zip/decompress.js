import { createReadStream, createWriteStream } from 'node:fs';
import { createUnzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { promisify } from 'node:util';
import path from 'node:path';

const decompress = async () => {
    const rootPath = path.join(process.cwd(), 'src/zip/files');
    const input = path.join(rootPath, 'archive.gz');
    const output = path.join(rootPath, 'fileToCompress.txt');

    const source = createReadStream(input);
    const destination = createWriteStream(output);
    const decompress = createUnzip();
    const pipe = promisify(pipeline);

    await pipe(source, decompress, destination);
};

await decompress();
