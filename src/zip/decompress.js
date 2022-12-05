import fs from 'node:fs';
import path from 'path'
import zlib from 'node:zlib';
import {fileURLToPath} from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const decompress = async () => {
    const filenamePath = path.join(dirname, 'files', 'archive.gz');
    const writeStream = path.join(dirname, 'files', 'fileToCompress.txt');
    const unzip = zlib.createUnzip();
    const source = fs.createReadStream(filenamePath);
    const destination = fs.createWriteStream(writeStream);

    source.pipe(unzip).pipe(destination);
};

await decompress();