import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createUnzip } from 'node:zlib';
import { createWriteStream, createReadStream } from 'node:fs';

const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const directory = join(__dirname, 'files');
    const sourceFileName = 'archive.gz';
    const targetFileName = 'fileToCompress.txt';
    const sourceFilePath = join(directory, sourceFileName);
    const targetFilePath = join(directory, targetFileName);

    const ungzip = createUnzip();
    const source = createReadStream(sourceFilePath);
    const destination = createWriteStream(targetFilePath);

    source.pipe(ungzip).pipe(destination);
};

await decompress();