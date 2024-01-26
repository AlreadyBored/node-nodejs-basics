import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { createUnzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getPath = (fileName) => join(__dirname, 'files', fileName);

const decompress = async () => {
    const unZip = createUnzip();

    const readFile = createReadStream(getPath('archive.gz'));
    const writeFile = createWriteStream(getPath('fileToCompress.txt'));

    readFile.pipe(unZip).pipe(writeFile);	

    writeFile.on('finish', () => console.log("Unzipped Successfully"));
};

await decompress();