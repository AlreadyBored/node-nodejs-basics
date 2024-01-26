import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPath = (fileName) => join(__dirname, 'files', fileName);

const compress = async () => {
    const zip = createGzip();

    const readFile = createReadStream(getPath('fileToCompress.txt'));
    const writeFile = createWriteStream(getPath('archive.gz'));

    readFile.pipe(zip).pipe(writeFile);	

    writeFile.on('finish', () => console.log("Zipped Successfully"));
};

await compress();