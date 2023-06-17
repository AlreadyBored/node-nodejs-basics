import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { pipeline } from 'stream'; 

const decompress = async () => {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const sourcePath = path.join(__dirname, 'files', 'archive.gz');
    const destinationPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const unzip = createUnzip();

    const source = createReadStream(sourcePath);
    const destination = createWriteStream(destinationPath);

    pipeline(source, unzip, destination, (err) => {
        if (err) {
            console.error('An error occurred:', err);
            process.exitCode = 1;
        }
    });
};

await decompress();
